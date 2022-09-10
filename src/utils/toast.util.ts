import { Toast } from '@douyinfe/semi-ui';
/**
 * @file: toast.util.ts
 * @author: xiaoqinvar
 * @desc：@douyinfe/semi-ui toastWarn 工具方法
 * @date: 2022-09-01 10:47:19
 */
declare type ToastTheme = 'light' | 'normal';
export const toastWarn = (content = '请联系管理员或重新使用Github登陆', duration = 3, theme: ToastTheme = 'light') => {
  return Toast.warning({
    content,
    duration,
    theme,
  });
};
