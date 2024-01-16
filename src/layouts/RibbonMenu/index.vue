<template>
  <n-layout>
    <n-config-provider style="height: 100%;" :theme="globalStore.theme"  :theme-overrides="globalStore.theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-layout-header bordered>
      <div class="tabs">
        <RibbonTitle
          :key="index"
          :title="item"
          :checked="checked == item"
          v-for="(item, index) in tabs"
          @click="checked = item"
        >
        </RibbonTitle>
        <div class="themelight">
          <n-button circle size="tiny" @click="changetheme">
            <template #icon>
              <n-icon>
                <sunny-outline v-if="globalStore.theme === null" />
                <moon-outline v-else/>
              </n-icon>
            </template>
          </n-button>
        </div>
      </div>
      <n-divider />
      <div class="menuGroups">
        <RibbonGroup title="">
          <RibbonButton title="Browser" icon="icon-browser"></RibbonButton>
        </RibbonGroup>

        <div class="tab-groups" v-show="checked == 'Edit/QAQC'">
          <EditQaQc></EditQaQc>
        </div>

        <div class="tab-groups" v-show="checked == 'Analysis'">
          <Analysis></Analysis>
        </div>
      </div>
    </n-layout-header>
    <n-layout
      content-class="n-layout-container"
      has-sider
      content-style="height: 100%;"
    >
      <n-split
        direction="horizontal"
        :max="0.75"
        :min="0.15"
        :default-size="0.15"
      >
        <template #1>
          <n-sider />
        </template>
        <template #2>
          <n-container />
        </template>
      </n-split>
    </n-layout>
    <n-footer/>
  </n-config-provider>
  </n-layout>
</template>

<script setup>
import RibbonTitle from "./components/RibbonTitle/index.vue";
import RibbonGroup from "./components/RibbonGroup/index.vue";
import RibbonButton from "./components/RibbonButton/index.vue";
import NSider from "../components/Sider/index.vue";
import NFooter from "../components/Footer/index.vue";
import NContainer from "../components/Container/index.vue";
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import Analysis from "./components/RibbonTabs/analysis.vue";
import EditQaQc from "./components/RibbonTabs/editQaqc.vue";
import { darkTheme, NConfigProvider  } from 'naive-ui'
import { darkThemeOverrides } from '@/styles/dark.ts' 
import { lightThemeOverrides } from '@/styles/light.ts' 
import { useGlobalStore } from '@/stores/modules/global';
const globalStore = useGlobalStore()
import {
  MoonOutline,
  SunnyOutline,
} from '@vicons/ionicons5'
const checked = ref("Edit/QAQC");

const tabs = [
  "File",
  "Edit/QAQC",
  // "Reference logs",
  // "Map",
  // "Additional tools",
  "Analysis",
  "Window",
];
// const theme = ref(null)
const changetheme = () => {
  // theme.value = theme.value == null ? darkTheme : null;
  globalStore.changethemew()
  console.log(globalStore.theme)
};
</script>

<style lang="scss" src="./index.scss" scoped>
</style>
