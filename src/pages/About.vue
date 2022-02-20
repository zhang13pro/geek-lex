<template>
  <h1 @click="toggle">全屏</h1>
  <Count />
</template>

<script setup>
import Count from "../components/Count.vue";
import { useFullscreen } from "@vueuse/core";
import { ref } from "vue";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
