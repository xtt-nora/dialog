<script setup lang="ts"></script>

<template>
  <div class="app">
    <n-message-provider>
      <message-api></message-api>
      <router-view></router-view>
    </n-message-provider>
  </div>
</template>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: $gray-bg;
  overflow: hidden;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .app-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
  }
}
.themelight{
  position: absolute;
  right: 20px;
  top: 3px;
  z-index:2;
}
</style>
