<script setup lang="ts">
import { reactive } from 'vue';
const obj = reactive({
 num: 18,
 name: '小红'
})

</script>
<template>
 <div>
  <p>This is a draggable dialog!</p>
  <div>有一个男生今年刚满{{obj.num}},他的名字叫{{obj.name}}</div>
     <n-carousel
direction="vertical"
dot-placement="right"
mousewheel
style="width: 100%; height: 240px"
>
<img
  class="carousel-img"
  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
>
<img
  class="carousel-img"
  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
>
<img
  class="carousel-img"
  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
>
<img
  class="carousel-img"
  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
>
   </n-carousel>
   <n-table :bordered="false" :single-line="false" size="small">
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
 </div>
</template>