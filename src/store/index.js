import { createStore } from "vuex";
// import { createStore } from "./gvuex";

// Vuex 所有的数据修改都是通过 mutations 来完成的，因而我们可以很方便地监控到数据的动态变化
const store = createStore({
  state() {
    return {
      count: 66,
    };
  },
  // 类似 computed
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  // 实现同步地修改数据
  mutations: {
    add(state) {
      state.count++;
    },
  },
  // 异步修改数据
  actions: {
    // 配置中所有的函数，可以通过解构获得 commit 函数
    asyncAdd({ commit }) {
      setTimeout(() => {
        // 调用 commit 来执行 mutations 去更新数据
        commit("add");
      }, 1000);
    },
  },
});

export default store;
