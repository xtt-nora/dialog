<template>
  <teleport to="body">
  <vue-drag-resize 
  :parentLimitation="false"
  :isActive="true" 
  :isResizable="true" 
  :w="500" 
  :h="400" 
  :z="zIndex1"
  v-on:resizing="resize" 
  v-on:dragging="resize"
  @mousedown="onActivated"
   v-if="info"
   >
    <div class="dialog-header">
      <slot name="header">新建弹窗</slot>
      <n-button size="tiny" @click="closeDialog">Close</n-button>
    </div> 
    <div class="dialog-content">
      <slot></slot>
    </div>
    <div class="dialog-footer">
      <n-button size="tiny" @click="submit">确定</n-button>
      <n-button size="tiny" @click="closeDialog">关闭</n-button>   
    </div>
  </vue-drag-resize>
    </teleport>
</template>

<script setup lang="ts">
import { ref, toRefs, defineProps, defineEmits, onMounted  } from 'vue';
import VueDragResize from 'vue-drag-resize/src';
import { useGlobalStore } from '@/stores/modules/global';
const globalStore = useGlobalStore()
const props = defineProps({
  info: Boolean,
})
const {info} =toRefs(props)
const zIndex1 = ref<number>(9999)
const emit = defineEmits(['closeDialog','submit'])
const closeDialog= () =>{
  let param={
    info: false
  }
  emit('closeDialog',param)
}
const submit = ()=>{
  let param={
    info: false
  }
  emit('submit',param)
}
const width = ref(0); 
const height = ref(0); 
const top = ref(0); 
const left = ref(0);
function resize (newRect:any){
  width.value = newRect.width;
  height.value = newRect.height;
  top.value = newRect.top;
  left.value = newRect.left;
}
onMounted(() => {
})
const onActivated =() =>{
  globalStore.$patch((state: { globalZIndex: number; }) => { 
      state.globalZIndex++
  })
  zIndex1.value = globalStore.globalZIndex
}
</script>

<style lang="scss" scoped>
::v-deep .content-container{
  display: flex;
  flex-direction: column;
  position: relative;
  height:100%;
}
.dialog-header {
 background-color: $primary-color;
  color: white;
  padding: 10px;
  cursor: move;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-content {
  background-color: white;
  padding: 20px;
  flex:1;
  overflow: auto;
}
.dialog-footer{
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.vdr.active:before {
  display:none;
}
.vdr.active{
  border: 1px solid;
  position: fixed;
}
::v-deep .vdr-stick {
    box-sizing: border-box;
    position: absolute;
    font-size: 1px;
    background: transparent;
    border: 1px solid transparent;
    box-shadow: 0 0 0.10417vw transparent;
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
