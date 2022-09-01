import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/header/Header';

// normalize css
import 'node_modules/normalize.css/normalize.css';

const container = document.getElementById('root') as HTMLElement;
render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
  container
);
