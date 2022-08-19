import { Form } from '@douyinfe/semi-ui';
import CryptoJS from 'crypto-js';
import { useCallback } from 'react';

const Login: React.FC = () => {
  // console.log('hmac hash');
  // const salt = CryptoJS.lib.WordArray.random(128 / 32);
  // const key128Bits = CryptoJS.PBKDF2("xiaoqinvar", salt, {
  //   keySize: 128 / 32,
  //   // iterations: 1000,
  // });
  // console.log("PBKDF2", key128Bits.toString(), salt.toString());
  // const sha3 = CryptoJS.SHA3("xiaoqinvar", { outputLength: 256 });
  // console.log("sha3", sha3.toString());

  // init.
  const inputWidth = 200;

  useCallback(() => {
    console.log(1);
    return () => {
      return 1;
    };
  }, [inputWidth]);

  return (
    <div className="login">
      <Form layout="vertical" style={{ width: 400 }}>
        <Form.Input field="UserName" label="用户名" style={{ width: inputWidth }} />
        <Form.Input type="password" field="PassWorld" label="密码" style={{ width: inputWidth }} />
      </Form>
    </div>
  );
};

export default Login;
