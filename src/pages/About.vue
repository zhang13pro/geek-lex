<template>
  <h1 @click="toggle">全屏</h1>
  <Rate value="1" theme="yellow" />
</template>
<script setup>
import Rate from "../components/Rate.vue";
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
