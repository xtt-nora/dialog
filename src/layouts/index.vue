<template>
  <component :is="LayoutComponents[layout]"/>
</template>

<script setup lang="ts" name="layout">
// @ts-ignore
import RibbonMenu from './RibbonMenu/index.vue'
import { computed, type Component } from 'vue';
import { LayoutType } from '@/stores/interface'
import { useGlobalStore } from '@/stores/modules/global';

const LayoutComponents: Record<LayoutType, Component> = {
    ribbon: RibbonMenu
}

const globalStore = useGlobalStore()

const layout = computed(() => globalStore.layout)
</script>

<style scoped lang="scss">

</style>