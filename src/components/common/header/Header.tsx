/**
 * @file: Header.tsx
 * @author: xiaoqinvar
 * @desc：Header给公共组件
 * @date: 2022-08-17 16:27:02
 */
import { Button, Popover, Tag } from '@douyinfe/semi-ui';
import logoImg from 'images/logo.png';
import { IconSun, IconMoon, IconGithubLogo } from '@douyinfe/semi-icons';
import HeaderStyle from './Header.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  // init
  const navigate = useNavigate();
  const body = document.body;
  const iconStyle = {
    color: '#9F9FA0',
    fontSize: '25px',
  };
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

  // common util
  // 当前为暗黑主题
  interface IisDarkThemeFuncArg {
    success: VoidFunction;
    fail: VoidFunction;
  }
  function isDarkTheme({ success, fail }: { success: VoidFunction; fail: VoidFunction }) {
    if (body.hasAttribute('theme-mode')) {
      success();
      return;
    }
    fail();
    return;
  }

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
        <Popover showArrow arrowPointAtCenter content={popoverContent}>
          <Button className={HeaderStyle['semi-button']} icon={iconComponent} aria-label="颜色主题" onClick={changeColorTheme} />
        </Popover>
        <Popover showArrow arrowPointAtCenter content="Github地址">
          <Button icon={<IconGithubLogo size="extra-large" />} type="tertiary" style={{ marginRight: 20 }} onClick={toGithub} />
        </Popover>
        <Popover showArrow arrowPointAtCenter content="去登陆">
          <Button theme="solid" type="secondary" style={{ marginRight: 10 }} onClick={() => navigate('/login')}>
            🥸 登陆
          </Button>
        </Popover>
      </div>
    </div>
  );
}
