import HomeIcon from '@/components/common/icon/HomeIcon';
import PermissionGroupIcon from '@/components/common/icon/PermissionGroup';
import PermissionGroup from '@/components/common/icon/PermissionGroup';
import PermissionIcon from '@/components/common/icon/PermissionIcon';
import RoleIcon from '@/components/common/icon/RoleIcon';
import UserIcon from '@/components/common/icon/UserIcon';
import NavHeader from '@/components/common/navHeader/NavHeader';
import { Icon, Nav } from '@douyinfe/semi-ui';
import { NavItems, OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import React, { useState } from 'react';
import { Outlet, useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import ManagerStyle from './Manager.module.scss';

const Manager: React.FC = () => {
  // init.
  const navList: NavItems = [
    { itemKey: 'home', text: '首页', icon: <Icon svg={<HomeIcon />} />, indent: true },
    { itemKey: 'users', text: '用户', icon: <Icon svg={<UserIcon />} /> },
    { itemKey: 'role', text: '角色', icon: <Icon svg={<RoleIcon />} /> },
    { itemKey: 'permission', text: '权限', icon: <Icon svg={<PermissionIcon />} /> },
    { itemKey: 'permissionGroup', text: '权限组', icon: <Icon svg={<PermissionGroupIcon />} /> },
  ];

  // hooks
  const nav = useNavigate();
  const localUrl = useLocation();
  // nav 默认选中key
  const [navDefaultKey, setNavDefaultKey] = useState<string[]>(() => {
    const selectKey = localUrl.pathname.replace('/manager/', '');
    return [selectKey];
  });

  // methods
  // nav选择导航事件 -> 展示对应子页面
  const selectNav = (key: OnSelectedData) => {
    const { itemKey } = key;
    const path = '/manager/' + itemKey;
    nav(path);
  };

  return (
    <div className={ManagerStyle['manager']}>
      <Nav
        items={navList}
        className={ManagerStyle['nav']}
        onSelect={selectNav}
        defaultSelectedKeys={navDefaultKey}
        header={<NavHeader />}
        footer={{
          collapseButton: true,
        }}
      />
      <Outlet />
    </div>
  );
};

export default Manager;
