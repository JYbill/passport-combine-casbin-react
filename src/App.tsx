import './App.scss';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Header from './components/common/header/Header';
import React, { LazyExoticComponent, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import GithubPage from './pages/github/Github';
import { Skeleton, Spin } from '@douyinfe/semi-ui';
import { IconWifi } from '@douyinfe/semi-icons';

export default function App() {
  // init.
  document.body.setAttribute('theme-mode', 'dark');

  // lazy components
  const LazyRedirect = lazy(() => import('./components/project/redirect/Redirect'));
  const LazyLogin = lazy(() => import('./pages/login/Login'));
  const LazyRegister = lazy(() => import('./pages/register/Register'));

  // loading
  const Loading = () => <Spin size="large" style={{ position: 'absolute', left: '50%', top: '50%' }} />;

  const elements = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyRedirect />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyLogin />
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyRegister />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyRegister />
        </Suspense>
      ),
    },
    {
      path: '/github',
      element: <GithubPage />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ]);

  return elements;
}
