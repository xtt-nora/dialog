import { defineStore } from "pinia";
import { GlobalState } from "../interface";
import { darkTheme  } from 'naive-ui'
export const useGlobalStore = defineStore({
  id: "global",
  state: (): GlobalState => ({
    layout: "ribbon",
    globalZIndex: 9999,
    theme: null
  }),
  getters: {},
  actions: {
    changethemew():void{
        this.theme = this.theme ===null?darkTheme: null
    }
  },
});
