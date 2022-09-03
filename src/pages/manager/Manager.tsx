import HomeIcon from '@/components/common/icon/HomeIcon';
import PermissionGroupIcon from '@/components/common/icon/PermissionGroup';
import PermissionGroup from '@/components/common/icon/PermissionGroup';
import PermissionIcon from '@/components/common/icon/PermissionIcon';
import RoleIcon from '@/components/common/icon/RoleIcon';
import UserIcon from '@/components/common/icon/UserIcon';
import { Icon, Nav } from '@douyinfe/semi-ui';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ManagerStyle from './Manager.module.scss';

const Manager: React.FC = () => {
  // init.
  const navList = [
    { itemKey: 'home', text: '首页', icon: <Icon svg={<HomeIcon />} /> },
    { itemKey: 'users', text: '用户', icon: <Icon svg={<UserIcon />} /> },
    { itemKey: 'role', text: '角色', icon: <Icon svg={<RoleIcon />} /> },
    { itemKey: 'permission', text: '权限', icon: <Icon svg={<PermissionIcon />} /> },
    { itemKey: 'permissionGroup', text: '权限组', icon: <Icon svg={<PermissionGroupIcon />} /> },
  ];

  return (
    <div className={ManagerStyle['manager']}>
      <Nav items={navList} className={ManagerStyle['nav']}></Nav>
      <Outlet />
    </div>
  );
};

export default Manager;
