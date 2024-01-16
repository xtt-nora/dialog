<template>
  <div class="container">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { useProps } from "../../hooks/ribbonProps";
defineProps(useProps);
</script>

<style lang="less" src="./index.scss" scoped></style>
