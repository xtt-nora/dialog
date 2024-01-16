export type LayoutType = 'ribbon'
export type globalZIndexType = 9999
// export type themeType = 'nul'

export type LanguageType = "zh" | "en" | null;

/*UserState*/
export interface UserState {
  token: string;
  userInfo: { name: string };
}

/*GlobalState*/
export interface GlobalState {
  layout: LayoutType;
  globalZIndex: globalZIndexType,
  theme: any
}

/*KeepAliveStore*/
export interface KeepAliveStore {
  keepAliveName: string[];
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  name: string;
  close: boolean;
  isKeepAlive: boolean;
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[];
}
