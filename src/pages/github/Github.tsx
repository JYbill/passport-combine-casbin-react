import AuthApi from '@/api/auth.api';
import { TPageProps } from '@/router/index.router';
import { toastWarn } from '@/utils/toast.util';
import { Spin } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GithubPageStyle from './Github.module.scss';

const githubCodePage: React.FC<TPageProps> = (props) => {
  // init.
  const updateLoginStateFunc = props.updateLoginStateFunc;
  const [params, setParams] = useSearchParams();
  const nav = useNavigate();
  const authApi = new AuthApi();
  const [isLoading, setLoading] = useState(true);

  // 获取github token存储localStorage
  const code = params.get('code') as string;
  const state = params.get('state') as string;

  // github login
  useEffect(() => {
    async function httpInit() {
      const ret = await authApi.getTokenByGithub({ code, state });
      // 失败
      if (!ret['success']) {
        setLoading(false);
        toastWarn();
        return;
      }
      updateLoginStateFunc(ret['data']['auth']);
      nav('/');
    }
    httpInit();
  }, []);

  // render
  return (
    <div className={GithubPageStyle['githubPage']}>
      <Spin wrapperClassName={GithubPageStyle['loading-container']} tip="github登录中..." spinning={true}>
        <div></div>
      </Spin>
    </div>
  );
};

export default githubCodePage;
