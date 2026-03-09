import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '@app/app';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root not found. Check index.html.');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
