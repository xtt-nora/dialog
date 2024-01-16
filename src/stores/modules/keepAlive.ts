import { defineStore } from "pinia";
import { KeepAliveStore } from "../interface";

export const useKeepAliveStore = defineStore({
  id: "keepAlive",
  state: (): KeepAliveStore => ({
    keepAliveName: ['home'],
  }),
  getters: {},
  actions: {
    // Add KeepAliveName
    async addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    // Romove KeepAliveName
    async removeKeepAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter((item) => item !== name);
    },
    // Set KeepAliveName
    async setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName;
    },
  },
});
