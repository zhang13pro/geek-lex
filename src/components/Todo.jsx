import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props) {
    let title = ref("");
    let todos = ref([
      { title: "学习 Vue 3", done: true },
      { title: "睡觉", done: false },
    ]);
    function addTodo() {
      todos.value.push({
        title: title.value,
      });
      title.value = "";
    }
    // JSX-in-Vue vModel取代v-model
    // 对动态性要求很高的场景使用JSX，本质还是在写 JavaScript
    // JSX 相比于 template 还有一个优势，是可以在一个文件内返回多个组件
    // 当然我们接受一些操作上的限制（Template），但同时也会获得一些系统优化的收益（Vue编译期间进行静态标记的优化）
    return () => (
      <div>
        <input type="text" vModel={title.value} />
        <button onClick={addTodo}>click</button>
        <ul>
          {todos.value.length ? (
            todos.value.map((todo) => {
              return <li>{todo.title}</li>;
            })
          ) : (
            <li>no data</li>
          )}
        </ul>
      </div>
    );
  },
});
