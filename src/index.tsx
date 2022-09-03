import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/header/Header';
import LoginStateContext from './context/login.context';

// normalize css
import 'node_modules/normalize.css/normalize.css';
import { useState } from 'react';

const container = document.getElementById('root') as HTMLElement;

render(<App />, container);
