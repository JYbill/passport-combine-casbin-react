/**
 * @file: login.context.ts
 * @author: xiaoqinvar
 * @desc：登陆状态context
 * @date: 2022-09-03 12:43:39
 */
import React from 'react';

const LoginStateContext = React.createContext<undefined | string>(undefined);
export default LoginStateContext;
