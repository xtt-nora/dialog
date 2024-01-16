<template>
  <div class="container">
    <div class="group">
      <slot></slot>
    </div>
    <div class="title">{{ title }}</div>
  </div>
  <n-divider vertical />
</template>

<script setup>
import { useProps } from "../../hooks/ribbonProps";
defineProps(useProps);
</script>

<style src="./index.scss" scoped></style>
