<template>
  <n-tabs
    :value="tabsMenuValue"
    type="card"
    animated
    size="small"
    :on-update:value="tabClick"
  >
    <n-tab-pane
      v-for="item in tabsMenuList"
      :key="item.path"
      :name="item.path"
      :tab="item.title"
    >
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTabsStore } from "@/stores/modules/tabs";

const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();

const tabsMenuList = computed(() => tabStore.tabsMenuList);
const tabsMenuValue = ref(route.fullPath);

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull || route.name === 'home') return;
    tabsMenuValue.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: !route.meta.isAffix,
      isKeepAlive: route.meta.isKeepAlive as boolean
    };

    tabStore.addTabs(tabsParams);
  },
  { immediate: true }
);
// Tab Click
const tabClick = (value: string) => {
  router.push(value);
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
