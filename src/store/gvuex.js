import { inject, reactive } from "vue";

const STORE_KEY = "__store__";
function useStore() {
  // 返回store实例对象 依赖注入
  return inject(STORE_KEY);
}
function createStore(options) {
  return new Store(options);
}
// 使用一个 Store 类来管理数据，类的内部使用 _state 存储数据，
// 使用 mutations 来存储数据修改的函数，注意这里的 state 已经使用 reactive 包裹成响应式数据了
class Store {
  constructor(options) {
    // 内部变量 _state 存储响应式数据
    this._state = reactive({
      data: options.state(),
    });
    this._mutations = options.mutations;
  }
  // main.js入口处app.use(store)的时候，会执行这个函数
  install(app) {
    // 向所有组件提供store实例
    app.provide(STORE_KEY, this);
  }
  // 读取 state 的时候直接获取响应式数据 _state.data
  get state() {
    return this._state.data;
  }
  // commit 函数去执行用户配置好的 mutations
  commit = (type, payload) => {
    const entry = this._mutations[type];
    // 调用mutations中的方法
    entry && entry(this.state, payload);
  };
}

export { createStore, useStore };
