<template>
  <div class="container" :class="{ active: checked }">
    <span> {{ title }}</span>
  </div>
</template>

<script setup>
import { useProps } from "../../hooks/ribbonProps";
defineProps(useProps);
</script>

<style lang="less" src="./index.scss" scoped></style>
