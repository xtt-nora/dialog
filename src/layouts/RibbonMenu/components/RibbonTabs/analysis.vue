<template>
  <!-- Layout -->
  <RibbonGroup title="Layout">
    <RibbonButton title="Auto" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Scales" icon="icon-browser"></RibbonButton>
    <RibbonDropdown :options="analysisLayoutShowValueOptions">
      <RibbonButton title="Show values" icon="icon-browser"></RibbonButton>
    </RibbonDropdown>
  </RibbonGroup>

  <!-- Analysis control -->
  <RibbonGroup title="Analysis control">
    <RibbonButton title="Info" icon="icon-browser"></RibbonButton>
    <RibbonButton title="PVT and Diffusion" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Tools" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Dashboard" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Results" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Valid" icon="icon-browser"></RibbonButton>
    <RibbonButton title="New" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Delete" icon="icon-browser"></RibbonButton>
  </RibbonGroup>

  <!-- Extraction -->
  <RibbonGroup title="Extraction"> 下拉框，根据功能编写 </RibbonGroup>

  <!-- Miscellaneous -->
  <RibbonGroup title="Miscellaneous">
    <RibbonButton title="Undo" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Redo" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Compare" icon="icon-browser"></RibbonButton>
    <RibbonDropdown :options="analysisMiscellaneousShowValueOptions">
      <RibbonButton title="New Plot" icon="icon-browser"></RibbonButton>
    </RibbonDropdown>
    <RibbonButton
      title="Time interval selection"
      icon="icon-browser"
    ></RibbonButton>
    <RibbonButton title="Print preview" icon="icon-browser"></RibbonButton>
    <RibbonButton title="Print" icon="icon-browser"></RibbonButton>
  </RibbonGroup>
</template>

<script setup>
import RibbonGroup from "../RibbonGroup/index.vue";
import RibbonButton from "../RibbonButton/index.vue";
import RibbonDropdown from "../RibbonDropdown/index.vue";
import { analysisLayoutShowValueOptions, analysisMiscellaneousShowValueOptions} from "../../hooks/ribbonOptions"

</script>