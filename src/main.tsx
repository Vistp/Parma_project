import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './app/App';

createRoot(document.getElementById('root')!).render(
  <>
    <CssBaseline />
    <App />
  </>,
);
