import AuthApi from '@/api/auth.api';
import { toastWarn } from '@/utils/toast.util';
import { Spin, Toast } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import GithubPageStyle from './Github.module.scss';

const githubCodePage = () => {
  // init.
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
      localStorage.setItem('token', ret['data']['auth']);
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
