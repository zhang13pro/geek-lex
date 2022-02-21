import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const tag = "h" + props.level;
    // 利用 JSX 写 h()
    return () => <tag>{slots.default()}</tag>;
  },
  // setup(props, { slots }) {
  //   // 返回render函数，render函数返回h()执行结果
  //   return () =>
  //     // 手写h函数
  //     h(
  //       "h" + props.level, // 标签名，这里使用字符串拼接实现 h1、h2...
  //       {}, // prop 或 attribute
  //       slots.default() // 子节点
  //     );
  // },
});

// JSX本质是语法糖
// const element = <h1 id="app">Hello World</h1>
// const element = createVnode('h1',{id:"app"}, 'Hello World')
// h 函数内部也是调用 createVnode 来返回虚拟 DOM。对于那些创建虚拟 DOM 的函数，我们统一称为 h 函数。
// 手写的 h 函数，可以处理动态性更高的场景
