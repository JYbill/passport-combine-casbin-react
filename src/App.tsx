import './App.scss';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Header from './components/common/header/Header';
import React, { LazyExoticComponent, lazy, Suspense } from 'react';

export default function App() {
  // init.
  document.body.setAttribute('theme-mode', 'dark');

  // 路由映射表
  interface RouteType {
    path: string;
    component?: LazyExoticComponent<React.FC> | null;
    to?: To;
    children?: RouteType[];
  }
  const routers: RouteType[] = [
    {
      path: '/',
      component: lazy(() => import('./components/project/redirect/Redirect')),
    },
    {
      path: '/login',
      component: lazy(() => import('./pages/login/Login')),
    },
    {
      path: '/404',
      component: lazy(() => import('./pages/404/NotFound')),
    },
    {
      path: '*',
      to: '/404',
    },
  ];

  /**
   * 根据RouteType判断当前为页面 or 重定向并返回对应的元素
   * @param item
   * @returns
   */
  function getElementByRouter(item: RouteType) {
    if (item.component) {
      return (
        <Suspense>
          <item.component />
        </Suspense>
      );
    }
    return <Navigate to={item.to as To} />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routers.map((item) => (
          <Route key={item.path} path={item.path} element={getElementByRouter(item)} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
