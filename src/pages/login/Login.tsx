import { IconLink } from '@douyinfe/semi-icons';
import { Form, Card, Button, Typography } from '@douyinfe/semi-ui';
import { useCallback } from 'react';
import LoginStyle from './Login.module.scss';

const Login: React.FC = () => {
  // init.

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
