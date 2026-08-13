import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main.jsx';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
