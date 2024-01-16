import router from "@/router/index.ts";
import { defineStore } from "pinia";
import { useKeepAliveStore } from "./keepAlive";
import { TabsState, TabsMenuProps } from "../interface";

const keepAliveStore = useKeepAliveStore();

export const useTabsStore = defineStore({
  id: "tabs",
  state: (): TabsState => ({
    tabsMenuList: [],
  }),
  actions: {
    // Add Tabs
    async addTabs(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every((item) => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem);
      }
      // add keepalive
      if (
        !keepAliveStore.keepAliveName.includes(tabItem.name) &&
        tabItem.isKeepAlive
      ) {
        keepAliveStore.addKeepAliveName(tabItem.name);
      }
    },
    // Remove Tabs
    async removeTabs(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return;
          const nextTab =
            this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1];
          if (!nextTab) return;
          router.push(nextTab.path);
        });
      }
      // remove keepalive
      const tabItem = this.tabsMenuList.find((item) => item.path === tabPath);
      tabItem?.isKeepAlive && keepAliveStore.removeKeepAliveName(tabItem.name);
      // set tabs
      this.tabsMenuList = this.tabsMenuList.filter(
        (item) => item.path !== tabPath
      );
    },
    // Set Tabs
    async setTabs(tabsMenuList: TabsMenuProps[]) {
      this.tabsMenuList = tabsMenuList;
    },
  },
});
