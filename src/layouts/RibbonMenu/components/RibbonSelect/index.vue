<template>
  <n-space vertical class="ribbonSelect">
    <div v-for="(item,index) in options" :key="index" class="group">
      <span>{{ item.name }}</span>
      <n-select class="select" :options="item.options" size="tiny"></n-select>
    </div>
  </n-space>
</template>

<script setup>
import { defineProps } from "vue";
import { NSpace, NSelect} from "naive-ui";

defineProps({
  options:{
    type:Array,
    default:[]
  }
})
</script>

<style src="./index.scss" scoped></style>
