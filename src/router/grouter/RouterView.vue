<template>
  <!-- 使用 component 组件动态渲染 -->
  <component :is="comp"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "../grouter/index";

let router = useRouter();
// 在用户路由配置 route 中计算出匹配的组件
const comp = computed(() => {
  const route = router.routes.find(
    (route) => route.path === router.current.value
  );
  return route ? route.component : null;
});
</script>
