<template>
  <n-tree
      ref="treeInstRef"
      block-line
      :data="data"
      virtual-scroll
      checkable
      :node-props="nodeProps"
      style="height:500px"
  />

  <n-dropdown
      trigger="manual"
      placement="bottom-start"
      :show="showDropdown"
      :options="options"
      :x="x"
      :y="y"
      @select="handleSelect"
      @clickoutside="handleClickoutside"
  />

</template>

<script setup>
import {NTree, NIcon, NDropdown} from "naive-ui";
import {Folder, FolderOpenOutline, FileTrayFullOutline, PlanetOutline,} from "@vicons/ionicons5";
import {h, ref} from "vue";
import {wellOptions, seismicOptions} from "./hooks/nodeDropdown.js";
import response from "./data.json";

const typeMap = {
  0: Folder,
  1: FolderOpenOutline,
  2: FileTrayFullOutline,
  default: PlanetOutline,
};

function recursionData(dirChild) {
  const children = [];
  // children
  dirChild.children.forEach((dir) => {
    const obj = {
      label: dir.dirName,
      key: dir.id,
      type: dir.type,
      prefix: () =>
          h(NIcon, null, {
            default: () => h(typeMap[dir.type ?? "default"]),
          }),
    };

    if (dir.children.length) {
      obj.children = recursionData(dir);
    }

    children.push(obj);
  });

  return children;
}

const data = response.data.map((dir) => {
  const obj = {
    label: dir.dirName,
    key: dir.id,
    type: dir.type,
    prefix: () =>
        h(NIcon, null, {
          default: () => h(typeMap[0]),
        }),
  };

  obj.children = recursionData(dir);
  return obj;
});

const showDropdown = ref(false);
const options = ref([]);
const x = ref(0);
const y = ref(0);

function nodeProps() {
  return {
    onContextmenu(e) {
      options.value = seismicOptions;
      showDropdown.value = true;
      x.value = e.clientX;
      y.value = e.clientY;
      e.preventDefault();
    },
  };
}

function handleSelect(action,option) {
  console.log(action)
  console.log(option)
  showDropdown.value = false;
}

function handleClickoutside() {
  showDropdown.value = false;
}
</script>
