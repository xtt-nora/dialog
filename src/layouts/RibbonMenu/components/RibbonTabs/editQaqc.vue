<template>
  <!-- Edit Mode -->
  <RibbonGroup title="Edit Mode">
    <RibbonButton title="QAQC" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Edit P" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Edit Q" icon="icon-browser"></RibbonButton>
  </RibbonGroup>

  <!-- display -->
  <RibbonGroup title="">
    <RibbonPopSelect :options="editQAQCDisplay">
      <RibbonButton title="Display" icon="icon-browser"></RibbonButton>
    </RibbonPopSelect>
  </RibbonGroup>

  <!-- Data -->
  <RibbonGroup title="Data">
    <RibbonButton title="Update from KS" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Load" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Muitphase" icon="icon-browser"></RibbonButton>
    <RibbonSlect :options="editQAQCDataSelectOptions"></RibbonSlect>
    <span> 下拉框，根据功能编写 </span>
  </RibbonGroup>

  <!-- Select -->
  <RibbonGroup title="Select">
    <RibbonButton title="Box KS" icon="icon-browser"></RibbonButton>
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="Time" icon="icon-browser" @click="btm"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Value" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Manual" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
    <RibbonButton title="Lasso" icon="icon-browser"></RibbonButton>
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="All" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="View" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Point" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
  </RibbonGroup>

  <!-- Edit -->
  <RibbonGroup title="Edit">
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="Undo" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Redo" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
    <RibbonButton title="Delete" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Process" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Shift" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Split" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Move" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Sync" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Line X" icon="icon-browser"></RibbonButton>

    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="P->Q" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Set 0" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Merge" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
  </RibbonGroup>

  <!-- Display -->
  <RibbonGroup title="Display">
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="Print preview" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Print" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
  </RibbonGroup>

  <RibbonGroup title="Display">
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="Print preview" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Print" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
  </RibbonGroup>

  <RibbonGroup title="Display">
    <RibbonTabsSubGroup>
      <RibbonSmallIconButton title="Print preview" icon="icon-browser"></RibbonSmallIconButton>
      <RibbonSmallIconButton title="Print" icon="icon-browser"></RibbonSmallIconButton>
    </RibbonTabsSubGroup>
  </RibbonGroup>

    <draggable-dialog  :info="parentMsg2"  @closeDialog="close" @submit="sub">
        <demo></demo>
      </draggable-dialog>
</template>

<script setup>
import RibbonGroup from "../RibbonGroup/index.vue";
import RibbonButton from "../RibbonButton/index.vue";
import RibbonPopSelect from "../RibbonPopSelect/index.vue";
import RibbonSlect from "../RibbonSelect/index.vue";
import RibbonTabsSubGroup from "../RibbonTabsSubGroup/index.vue";
import RibbonSmallIconButton from '../RibbonSmallIconButton/index.vue'
import DraggableDialog from '@/components/DraggableDialog.vue';
import Demo from '@/views/home/demo.vue';
import {
  editQAQCDisplay,
  editQAQCDataSelectOptions,
} from "../../hooks/ribbonOptions";
const parentMsg2=ref(false)
const btm =() => {
  parentMsg2.value = true
}
const close=(val)=>{
  console.log(val)
  parentMsg2.value = val.info
}
const sub=(val)=>{
  parentMsg2.value = val.info
}
</script>
