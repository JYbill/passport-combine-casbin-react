import { IconGithubLogo, IconLink } from '@douyinfe/semi-icons';
import { Form, Card, Button, Typography, Divider } from '@douyinfe/semi-ui';
import { useCallback } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import LoginStyle from './Login.module.scss';
import Config from '@/config/index.config';

const Login: React.FC = () => {
  // init.
  const nav = useNavigate();

  /**
   * 使用github授权登陆
   */
  const loginByGithub = () => {
    const clientId = Config.githubLogin.clientId;
    const state = Math.random().toString(32).slice(2);
    const redirectURL = Config.githubLogin.redirectUrl;
    const githubAuthorizeURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}&redirect_uri=${redirectURL}`;
    window.open(githubAuthorizeURL, '_block');
  };

  return (
    <div className={LoginStyle.Login}>
      <h1>Sign in to system.</h1>

      {/* 登陆表单 */}
      <Card>
        <div className={LoginStyle.form}>
          <Form layout="vertical">
            <Form.Input field="UserName" label="用户名" />
            <Form.Input type="password" field="PassWorld" label="密码" />
            <Button className={LoginStyle['semi-button']} theme="solid" type="primary">
              sign in
            </Button>
          </Form>
        </div>
      </Card>

      {/* 登陆方式 */}
      <Divider margin="12px" align="center" className={LoginStyle['semi-divider']}>
        or
      </Divider>
      <Button icon={<IconGithubLogo />} className={LoginStyle['github-login-btn']} theme="solid" type="primary" onClick={loginByGithub}>
        通过Github登陆
      </Button>

      {/* 注册 */}
      <Card className={LoginStyle['register-card']}>
        <span>没有账号登录？</span>
        <Typography.Text icon={<IconLink />} link={{ href: '/register ' }}>
          创建账号
        </Typography.Text>
      </Card>
    </div>
  );
};

export default Login;
