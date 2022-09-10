/**
 * @file: Header.tsx
 * @author: xiaoqinvar
 * @desc：Header给公共组件
 * @date: 2022-08-17 16:27:02
 */
import { Avatar, Button, Popover } from '@douyinfe/semi-ui';
import logoImg from 'images/logo.png';
import { IconSun, IconMoon, IconGithubLogo } from '@douyinfe/semi-icons';
import HeaderStyle from './Header.module.scss';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginStateContext from '@/context/login.context';
import { TPageProps } from '@/router/index.router';
import { EcmaUtil, TJwtParseObject } from '@/utils/ecma.util';

const Header: React.FC<TPageProps> = (props) => {
  // init
  const { updateLoginStateFunc } = props;
  const navigate = useNavigate();
  const body = document.body;
  const iconStyle = {
    color: '#9F9FA0',
    fontSize: '25px',
  };

  // hooks
  // 根据当前点击的状态设置icon组件
  const [iconComponent, setIconComponent] = useState(() => {
    if (body.hasAttribute('theme-mode')) {
      return <IconSun style={iconStyle} />;
    }
    return <IconMoon style={iconStyle} />;
  });
  // 气泡主题popover内容
  const [popoverContent, setPopoverContent] = useState(() => {
    if (body.hasAttribute('theme-mode')) {
      return <p>切换到亮色模式</p>;
    }
    return <p>切换到暗色模式</p>;
  });
  // 登陆状态
  const loginContext = useContext(LoginStateContext);
  let jwtParseObject: TJwtParseObject;
  if (loginContext) {
    jwtParseObject = EcmaUtil.parseJWT(loginContext as string, 'Bearer ');
  }

  // common util
  // 当前为暗黑主题
  function isDarkTheme({ success, fail }: { success: VoidFunction; fail: VoidFunction }) {
    if (body.hasAttribute('theme-mode')) {
      success();
      return;
    }
    fail();
    return;
  }

  // components
  // 登陆按钮
  const ShowLoginBtn = () => {
    // 登陆
    if (loginContext) {
      return (
        <Popover showArrow arrowPointAtCenter content="真的要退出吗？">
          <Button
            theme="solid"
            type="tertiary"
            style={{ marginRight: 10 }}
            onClick={() => {
              updateLoginStateFunc();
              navigate('/login');
            }}
          >
            🥺 退出
          </Button>
        </Popover>
      );
    }
    return (
      <Popover showArrow arrowPointAtCenter content="去登录">
        <Button theme="solid" type="secondary" style={{ marginRight: 10 }} onClick={() => navigate('/login')}>
          🥸 登录
        </Button>
      </Popover>
    );
  };
  // 头像
  const LoginAvatar = () => {
    if (!loginContext || loginContext.length <= 0) {
      return null;
    }
    return (
      <Popover showArrow arrowPointAtCenter content={JSON.stringify(jwtParseObject['payload'])}>
        <Avatar alt="" src={jwtParseObject.payload.avatarUrl as string} size="default" />
      </Popover>
    );
  };

  // methods
  // btn onclick 修改颜色状态方法
  const changeColorTheme = () => {
    isDarkTheme({
      success: () => {
        body.removeAttribute('theme-mode');
        setIconComponent(<IconMoon style={iconStyle} />);
        setPopoverContent(<p>切换到暗色模式</p>);
      },
      fail: () => {
        body.setAttribute('theme-mode', 'dark');
        setIconComponent(<IconSun style={iconStyle} />);
        setPopoverContent(<p>切换到亮色模式</p>);
      },
    });
  };

  // logo click
  const toIndex = () => {
    navigate('/');
  };

  // open window to github
  const toGithub = () => {
    window.open('https://github.com/JYbill/passport-combine-casbin', '_blank');
  };

  return (
    <div className={HeaderStyle.Header}>
      <Popover showArrow arrowPointAtCenter content="🥷！别点！">
        <img src={logoImg} onClick={toIndex} />
      </Popover>
      <div className={HeaderStyle.operation}>
        {/* 登陆头像 */}
        <LoginAvatar />
        <Popover showArrow arrowPointAtCenter content={popoverContent}>
          <Button className={HeaderStyle['semi-button']} icon={iconComponent} aria-label="颜色主题" onClick={changeColorTheme} />
        </Popover>
        <Popover showArrow arrowPointAtCenter content="Github地址">
          <Button icon={<IconGithubLogo size="extra-large" />} type="tertiary" style={{ marginRight: 20 }} onClick={toGithub} />
        </Popover>

        {/*  登陆按钮 */}
        <ShowLoginBtn />
      </div>
    </div>
  );
};

export default Header;
