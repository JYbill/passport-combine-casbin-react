import { Card } from '@douyinfe/semi-ui';
import HomeStyle from './Home.module.scss';
import HomeImg from '@/assets/images/home.jpeg';
import { useContext } from 'react';
import LoginStateContext from '@/context/login.context';
import { EcmaUtil } from '@/utils/ecma.util';

const Home: React.FC = () => {
  // hooks
  const loginStateContext = useContext(LoginStateContext);
  const tokenParseObject = EcmaUtil.parseJWT(loginStateContext as string, 'Bearer ');
  // console.log(tokenParseObject['type']);
  // console.log(tokenParseObject['payload']);
  return (
    <Card className={HomeStyle['home']}>
      <img src={HomeImg} alt="" />
      <p>
        欢迎`{tokenParseObject['payload']['nickname']}`通过`{tokenParseObject['payload']['type']}`进入casbin系统！
      </p>
    </Card>
  );
};

export default Home;
