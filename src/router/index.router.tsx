import { Spin } from '@douyinfe/semi-ui';
import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import GithubPage from '@/pages/github/Github';
import NotFound from '@/pages/404/NotFound';

export type TPageProps = {
  updateLoginStateFunc: (token?: string) => void;
};
const ProjectRouter: React.FC<TPageProps> = (props) => {
  // lazy components
  const LazyRedirect = lazy(() => import('@/components/project/redirect/Redirect'));
  const LazyLogin = lazy(() => import('@/pages/login/Login'));
  const LazyRegister = lazy(() => import('@/pages/register/Register'));
  const LazyManager = lazy(() => import('@/pages/manager/Manager'));

  // loading
  const Loading = () => <Spin size="large" style={{ position: 'absolute', left: '50%', top: '50%' }} />;

  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyRedirect />
        </Suspense>
      ),
    },
    {
      path: '/manager',
      element: (
        <Suspense fallback={<Loading />}>
          <LazyManager />
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
      element: <GithubPage updateLoginStateFunc={props.updateLoginStateFunc} />,
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
};

export default ProjectRouter;
