import { createRoot } from 'react-dom/client';
import App from './App';

// normalize css
import 'node_modules/normalize.css/normalize.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
);
