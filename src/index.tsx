import { createRoot } from 'react-dom/client';
import App from './App';

// normalize css
import 'node_modules/normalize.css/normalize.css';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <>
    <App />
  </>
);
