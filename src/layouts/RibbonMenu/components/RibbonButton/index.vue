<!--
 * @Author: DESKTOP-UPEOCQO\XuTingting xutingting@bbcpetro.com
 * @Date: 2024-01-10 13:37:40
 * @LastEditors: DESKTOP-UPEOCQO\XuTingting xutingting@bbcpetro.com
 * @LastEditTime: 2024-01-11 16:46:00
 * @FilePath: \demo3\src\layouts\RibbonMenu\components\RibbonButton\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { useProps } from "../../hooks/ribbonProps";

defineProps(useProps);
</script>

<style lang="less" src="./index.scss" scoped></style>
