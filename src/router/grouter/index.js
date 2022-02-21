// 为了实现单页应用，前端路由的需求也变得重要了起来。
// 前端控制路由的实现原理  改变 URL 的情况下，保证页面的不刷新。
// hash模式原理👉 hash 值的变化并不会导致浏览器页面的刷新，只是会触发 hashchange 事件
// history模式👉 HTML5新增API：pushState 和 replaceState可以在改变URL时不发送请求

import { ref, inject } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";

const ROUTER_KEY = "__router__";

function createRouter(options) {
  return new Router(options);
}
// 获取路由实例
function useRouter() {
  return inject(ROUTER_KEY);
}
function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener("hashchange", fn);
  }
  // 返回hash 模式当前 URL（#后的就是hash值） 和监听 hashchange 事件的方法
  // history模式 可以使用 location.pathname.slice(1,-1)
  return {
    bindEvents,
    url: window.location.hash.slice(1) || "/",
  };
}
class Router {
  constructor(options) {
    this.history = options.history;
    this.routes = options.routes;
    this.current = ref(this.history.url);
    this.history.bindEvents(() => {
      // 更新 hash URL
      this.current.value = window.location.hash.slice(1);
    });
  }
  // 注册 Router 的实例 use(router)时调用
  install(app) {
    app.provide(ROUTER_KEY, this);
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  }
}

export { createRouter, createWebHashHistory, useRouter };
