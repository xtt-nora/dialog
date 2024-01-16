<template>
  <n-popselect v-model:value="value" trigger="click" :options="options" multiple>
    <slot></slot>
  </n-popselect>
</template>

<script setup>
import { ref } from "vue";
import { NPopselect } from "naive-ui";

defineProps({
  options: {
    type: Array,
    defalut: []
  }
})

const value = ref(null);
</script>
