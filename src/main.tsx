import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.ts';

import { Provider } from "@/components/ui/provider";

import "./globals.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
