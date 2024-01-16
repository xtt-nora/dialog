<!--
 * @Author: DESKTOP-UPEOCQO\XuTingting xutingting@bbcpetro.com
 * @Date: 2024-01-10 15:05:00
 * @LastEditors: DESKTOP-UPEOCQO\XuTingting xutingting@bbcpetro.com
 * @LastEditTime: 2024-01-11 10:09:14
 * @FilePath: \demo3\src\layouts\components\Container\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <n-layout
    :native-scrollbar="false"
    id="containerRight"
    content-style="height: 100%; display: flex; flex-direction: column;"
  >
    <tabs />
    <n-layout content-class="n-main">
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="keepAliveName">
          <component :is="Component" :key="route.fullPath"></component>
        </keep-alive>
      </router-view>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { useKeepAliveStore } from "@/stores/modules/keepAlive";
import Tabs from "../Tabs/index.vue";
import { storeToRefs } from "pinia";

const keepAliveStore = useKeepAliveStore();
const { keepAliveName } = storeToRefs(keepAliveStore);
</script>

<style scoped lang="scss">
@import url(./index.scss);
</style>
