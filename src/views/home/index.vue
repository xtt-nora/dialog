<template>
  <div style="width:100%;height:100%;">
    <n-button @click="dig" size="tiny">弹窗1</n-button>
    <n-button @click="dig2" size="tiny">弹窗2</n-button>
    <n-button @click="dig3" size="tiny">弹窗3</n-button>
    <n-button @click="dig4" size="tiny">弹窗4</n-button>
    <n-button @click="dig5" size="tiny">弹窗5</n-button>
    <draggable-dialog  :info="parentMsg" @closeDialog="close" @submit="sub">
      <template v-slot:header>
        弹窗1
       </template>
      <p>This is a draggable dialog!</p>
      <n-divider />
      <demo></demo>
    </draggable-dialog>
    <draggable-dialog  :info="parentMsg2">
      <demo ></demo>
    </draggable-dialog>
    <draggable-dialog  :info="parentMsg3">
    </draggable-dialog>
    <draggable-dialog  :info="parentMsg4">
    </draggable-dialog> 
    <draggable-dialog  :info="parentMsg5">
    </draggable-dialog>
  </div>
</template>

<script setup lang="ts">
import DraggableDialog from '@/components/DraggableDialog.vue';
import Demo from './demo.vue';
import {provide, ref, reactive } from 'vue';
// const width = ref(0); 
// const height = ref(0); 
// const top = ref(0); 
// const left = ref(0); 
// const isDialogVisible = ref(false);
// 后期是demo数据传入给submit
const obj = reactive({
 num: 18,
 name: '小红'
})
const zIndex = ref<number>(1)
  provide('zIndex', zIndex);
const parentMsg=ref(false)
const parentMsg2=ref(false)
const parentMsg3=ref(false)
const parentMsg4=ref(false)
const parentMsg5=ref(false)
// function resize (newRect:any){
//   width.value = newRect.width;
//   height.value = newRect.height;
//   top.value = newRect.top;
//   left.value = newRect.left;
// }
const dig =() => {
  parentMsg.value = true
}
const dig2 =() => {
  parentMsg2.value = true
}
const dig3 =() => {
  parentMsg3.value = true
}
const dig4 =() => {
  parentMsg4.value = true
}
const dig5 =() => {
  parentMsg5.value = true
}
const close=(val:any)=>{
  console.log(val)
  parentMsg.value = val.info
}
const sub=(val:any)=>{
  parentMsg.value = val.info
  console.log(obj)
}

</script>
<style scoped>
.blank {
  background-color: #dbdbdb;
}
</style>
