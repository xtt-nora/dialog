import naiveui from "@/utils/naiveui";

/**
 * @description 校验网络请求状态码
 * @param {Number} status
 * @reutrn void
 */
export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      naiveui.message.error("请求失败！请您稍后重试");
      break;
    case 401:
      naiveui.message.error("登录失败！请您重新登陆");
      break;
    case 403:
      naiveui.message.error("当前账号无权限访问！");
      break;
    case 404:
      naiveui.message.error("您所访问的资源不存在！");
      break;
    case 405:
      naiveui.message.error("请求方式错误！请您稍后重试");
      break;
    case 408:
      naiveui.message.error("请求超时！请您稍后重试");
      break;
    case 500:
      naiveui.message.error("服务器异常！");
      break;
    case 502:
      naiveui.message.error("网关错误！");
      break;
    case 503:
      naiveui.message.error("服务不可用！");
      break;
    case 504:
      naiveui.message.error("网关超时！");
      break;
    default:
      naiveui.message.error("请求失败！");
  }
};
