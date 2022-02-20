<template>
  <div @click="asyncAdd">
    {{ count }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// import { useStore } from "../store/gvuex";

let store = useStore();
let count = computed(() => store.state.count);

function add() {
  store.commit("add");
}
// actions 的调用方式是使用 store.dispatch
function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>
