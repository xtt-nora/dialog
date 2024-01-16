<template>
  <n-layout-sider
    :native-scrollbar="false"
    bordered
    id="containerLeft"
    content-style="height: 100%;"
  >
    <div class="siderContainer">
      <div class="tabs">
        <template v-for="item in tabList">
          <div class="icon" @click="currentComponent = item.component">
            <n-icon size="20" :component="item.icon"></n-icon>
          </div>
        </template>
      </div>
      <div class="content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { TextBulletListTree20Regular, Record48Regular } from "@vicons/fluent";
// @ts-ignore
import dataTree from "./components/dataTree/index.vue";
import log from "./components/log/index.vue";

onMounted(() => {});

const currentComponent = ref(dataTree);

const tabList = [
  {
    id: 0,
    icon: TextBulletListTree20Regular,
    title: "数据树",
    component: dataTree,
  },
  { id: 1, icon: Record48Regular, title: "日志", component: log },
];
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
