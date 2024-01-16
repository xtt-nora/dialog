<template>
  <n-dropdown trigger="click" :options="options" size="small">
    <slot></slot>
  </n-dropdown>
</template>

<script setup>
import { NDropdown } from 'naive-ui'

defineProps({
  options: {
    type: Array,
    defalut: []
  }
})
</script>