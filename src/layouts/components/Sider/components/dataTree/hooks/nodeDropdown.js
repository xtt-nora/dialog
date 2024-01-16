import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Flower,
  Archive
} from "@vicons/ionicons5";

import { renderIcon} from "@/hooks/common";
export const wellOptions = [
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon)
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon)
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon)
  }
]

export const seismicOptions = [
  {
    label: "地震",
    key: "profile",
    icon: renderIcon(Flower)
  },
  {
    label: "其他",
    key: "other",
    icon: renderIcon(Archive),
    children:[
      {
        label: '鸡肉',
        key: 'chicken'
      },
      {
        label: '牛肉',
        key: 'beef'
      }
    ]
  },
]
