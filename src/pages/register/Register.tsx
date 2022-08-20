import React from 'react';
import RegisterGif from 'images/register.gif';
import RegisterStyle from './Register.module.scss';
import { Card, Form } from '@douyinfe/semi-ui';

const Register: React.FC = () => {
  console.log(RegisterGif);

  return (
    <div className={RegisterStyle.Register}>
      <Card className={RegisterStyle['register-form']}>
        <Form>
          <Form.Input field="username" type="text" label="账号" />
        </Form>
      </Card>
      <img src={RegisterGif} alt="" />
    </div>
  );
};
export default Register;
