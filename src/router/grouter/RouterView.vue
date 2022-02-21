<template>
  <!-- 使用 component 组件动态渲染 -->
  <component :is="comp"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "../grouter/index";

// 依赖注入 获取Router实例
let router = useRouter();
const comp = computed(() => {
  const route = router.routes.find(
    // 用户路由配置 route 是否匹配当前组件URL
    (route) => route.path === router.current.value
  );
  return route ? route.component : null;
});
</script>
