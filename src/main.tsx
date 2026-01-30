import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { ErrorBoundary } from './components/ErrorBoundary';

import '@/styles/global.scss';
import '@/styles/theme.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
