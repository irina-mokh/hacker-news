import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

