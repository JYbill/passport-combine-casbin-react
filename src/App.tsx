import './App.scss';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Header from './components/common/header/Header';
import React, { LazyExoticComponent, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import GithubPage from './pages/github/Github';

export default function App() {
  // init.
  document.body.setAttribute('theme-mode', 'dark');

  // lazy components
  const LazyRedirect = lazy(() => import('./components/project/redirect/Redirect'));
  const LazyLogin = lazy(() => import('./pages/login/Login'));
  const LazyRegister = lazy(() => import('./pages/register/Register'));

  const elements = useRoutes([
    {
      path: '/',
      element: (
        <Suspense>
          <LazyRedirect />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense>
          <LazyLogin />
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense>
          <LazyRegister />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense>
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
