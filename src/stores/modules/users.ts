import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: "",
    userInfo: {
      name: "",
    },
  }),
  getters: {},
  actions: {
    // 设置token
    setToken(token: string) {
      this.token = token;
    },
    // 设置用户信息
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
    persist: piniaPersistConfig("user"),
  },
});
