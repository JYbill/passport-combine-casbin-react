import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/header/Header';
import React, { useState } from 'react';
import LoginStateContext from './context/login.context';
import ProjectRouter from '@/router/index.router';
import BomUtil from './utils/bom.util';

const App: React.FC = () => {
  // init.
  document.body.setAttribute('theme-mode', 'dark');

  // state.
  // 登陆状态
  const [loginState, setLoginState] = useState(() => {
    const token = localStorage.getItem('token');
    if (!token || token.length <= 0) {
      return '';
    }
    return token;
  });

  // common state functions.
  const updateLoginStateFunc = (token?: string) => {
    if (!token || (token as string).length <= 0) {
      BomUtil.clearLocalStorage('token');
      setLoginState('');
      return;
    }
    localStorage.setItem('token', token);
    setLoginState(token);
  };

  return (
    <BrowserRouter>
      <LoginStateContext.Provider value={loginState}>
        <Header updateLoginStateFunc={updateLoginStateFunc} />
        <ProjectRouter updateLoginStateFunc={updateLoginStateFunc} />
      </LoginStateContext.Provider>
    </BrowserRouter>
  );
};

export default App;
