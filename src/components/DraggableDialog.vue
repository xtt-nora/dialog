<template>
  <teleport to="body">
<vue-drag-resize 
:parentLimitation="true"
:isActive="isActive"
:isResizable="true"
:w="700"
:h="600"
:minw="200"
:minh="300"
:x="initX"
:y="initY"
:z="zIndex1"
v-on:resizing="resize"
v-on:dragging="resize"
@mousedown.stop="onActivated"
 v-if="info"
 >
  <n-el tag="div" class="dialog-header">
    <slot name="header">新建弹窗</slot>
    <n-el tag="div">
      <n-button size="tiny" class="blub">
    <template #icon>
      <n-icon><bulb-icon /></n-icon>
    </template>
  </n-button>
  <n-button size="tiny"  @click="closeDialog">
    <template #icon>
      <n-icon><close-icon /></n-icon>
    </template>
  </n-button>
    </n-el>
  </n-el>
  <n-el  tag="div" class="dialog-content" @mousedown.stop="startDrag">
    <slot></slot>
  </n-el>
  <n-el  tag="div" class="dialog-footer"  @mousedown.stop="startDrag">
    <slot name="button">
      <n-button size="tiny" @click="submit" class="submit">确定</n-button>
      <n-button size="tiny" @click="closeDialog">关闭</n-button>   
     </slot>
    <!-- <n-button size="tiny" @click="submit" class="submit">确定</n-button>
    <n-button size="tiny" @click="closeDialog">关闭</n-button>    -->
  </n-el>
</vue-drag-resize>
</teleport>
</template>

<script setup lang="ts">
import { ref, toRefs, defineProps, defineEmits, onMounted  } from 'vue';
//@ts-ignore
import VueDragResize from 'vue-drag-resize/src';
import { useGlobalStore } from '@/stores/modules/global';
import { CloseOutline as CloseIcon, BulbOutline as BulbIcon } from '@vicons/ionicons5'
const globalStore = useGlobalStore()
const props = defineProps({
info: Boolean,
})
const initX = ref(0)
const initY = ref(0)
const {info} =toRefs(props)
const isActive = ref(true)
const zIndex1 = ref<number>(9)
const emit = defineEmits(['closeDialog','submit'])
const   closeDialog= () =>{
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
  const app = document.getElementById('app')
  initX.value = app?.offsetWidth/4
  initY.value = app?.offsetHeight/6
})
const onActivated =() =>{
globalStore.$patch((state: { globalZIndex: number; }) => {
    state.globalZIndex++
})
zIndex1.value = globalStore.globalZIndex
}
const startDrag =()=>{
  isActive.value  = false
}
</script>

<style lang="scss" scoped>
:deep(.content-container){
display: flex;
flex-direction: column;
position: relative;
height:100%;
border-radius: 10px;
background-color: #FFFFFF;
}
.dialog-header {
background-color: var(--tab-color);
border: 1px solid var(--border-color);
border-bottom:none;
padding: 10px;
height: 5%;
cursor: move;
// color: #818594;
color: var(--text-color-base);
border-radius: 10px 10px 0 0;
display: flex;
justify-content: space-between;
align-items: center;
.blub{
  margin-right: 10px;
}
}

.dialog-content {
background-color: var(--body-color);
border: 1px solid var(--border-color);
border:1px solid var(--border-color); 
border-top:none;
border-bottom:none;
padding: 20px;
height: 85%;
overflow: auto;
}
.dialog-footer{
height: 10%;
padding-right: 20px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
border-radius: 0 0 10px 10px;
background-color: var(--body-color);
border: 1px solid var(--border-color);
border-top:none;
.submit{
  margin-right: 10px;
}
}
.vdr.active:before {
display:none;
}
.vdr.active{
border: 1px solid var(--border-color);
border-radius: 10px;
position: fixed;
}
:deep(.vdr-stick) {
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
