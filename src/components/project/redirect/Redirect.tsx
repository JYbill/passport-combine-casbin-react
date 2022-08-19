/**
 * @file: Redirect.tsx
 * @author: xiaoqinvar
 * @desc：重定向组件，当没有token访问/时，跳转到登陆页面，反之证明登陆成功跳转到管理首页
 * @date: 2022-08-17 15:46:15
 */
import { Navigate } from 'react-router-dom';

export default function RedirectByStatus() {
  const flag = 'token';
  const login = 'login';
  const index = 'manager';

  const token = localStorage.getItem(flag);
  const path = token ? index : login;
  return <Navigate to={path} replace={true} />;
}
