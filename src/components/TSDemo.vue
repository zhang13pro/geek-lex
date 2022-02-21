<script setup lang="ts">
// node_modules/@vue/reactivity/dist/reactivity.d.ts 查看Composition API类型定义
import { computed, reactive, ref, Ref } from "vue";

// 借助TS 的自动类型推导 也可以显式地通过泛型去限制
const count = ref(1);
// count.value.split(""); // => Property 'split' does not exist on type 'number'

// 接口定义
interface Geek {
  name: string;
  price: number;
}

const msg = ref(""); //  根据输入参数推导字符串类型
const msg1 = ref<string>(""); //  可以通过范型显示约束

const obj = reactive({});
const course = reactive<Geek>({ name: "玩转Vue3", price: 129 });

const msg2 = computed(() => ""); // 默认参数推导
const course2 = computed<Geek>(() => {
  return { name: "玩转Vue3", price: 129 };
});

// 对传递的属性 Props 声明类型
const props = defineProps<{
  title: string;
  value?: number;
}>();
const emit = defineEmits<{
  (e: "update", value: number): void;
}>();

// TodoList 重构
interface Todo {
  title: string;
  done: boolean;
}
let todos: Ref<Todo[]> = ref([{ title: "学习TypeScript", done: false }]);
</script>

<!-- 我们可以从代码编辑器的智能提示中及时发现错误，这对我们代码的开发效率是一个很大的提升。
基于数字、字符串这种简单的变量类型，我们可以组装出接口类型、数组类型等，
也就可以更精确地控制项目中的数据结构。 -->
