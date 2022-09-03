import { render } from 'react-dom';
import App from './App';

// normalize css
import 'node_modules/normalize.css/normalize.css';

// icon font
import './assets/icon/iconfont.js';

const container = document.getElementById('root') as HTMLElement;

render(<App />, container);
