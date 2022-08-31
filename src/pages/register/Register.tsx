import React from 'react';
import RegisterGif from 'images/register.gif';
import RegisterStyle from './Register.module.scss';
import { Button, Card, Form } from '@douyinfe/semi-ui';

// type
type formType = {
  username?: string;
  password?: string;
};

const Register: React.FC = () => {
  // init.

  /**
   * 校验表达函数
   * @param values
   * @returns
   */
  const validateForm = (values: Record<string, string>) => {
    const errors: formType = {};
    for (const [key, value] of Object.entries(values)) {
      switch (key) {
        case 'username':
          const usernameLength = value.trim().length;
          usernameLength <= 10 && usernameLength >= 3 ? '' : (errors.username = '用户名请在3-10个字符之间');
          break;
        case 'password':
          const passwordLength = value.trim().length;
          passwordLength <= 15 && passwordLength >= 8 ? '' : (errors.password = '密码请在8-15个字符之间');
          break;
      }
    }
    return errors;
  };

  return (
    <Card className={RegisterStyle.Register}>
      {/* 表单 */}
      <div className={RegisterStyle['form-context']}>
        <h1>Sin up.</h1>
        <Form labelPosition="left" wrapperCol={{ span: 20 }} labelCol={{ span: 4 }} validateFields={validateForm}>
          <Form.Input field="username" type="text" label="账号" autoComplete="off" />
          <Form.Input field="password" label="密码" mode="password" />
          <div className="operation-btn">
            <Button htmlType="submit">注册</Button>
            <Button htmlType="reset">重制</Button>
          </div>
        </Form>
      </div>
      {/* 右侧动图 */}
      <img src={RegisterGif} />
    </Card>
  );
};
export default Register;
