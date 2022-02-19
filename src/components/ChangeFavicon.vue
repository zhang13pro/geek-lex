<script setup>
import useFavicon from "./utils/favicon";
let { favicon } = useFavicon();
function loading() {
  favicon.value = "/geek.png";
}
</script>

<template>
  <button @click="loading">123</button>
</template>
