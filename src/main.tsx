import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.ts';

import { Provider } from "@/components/ui/provider";

import "./globals.css";

const Main = () => {
  return (
    <StrictMode>
      <Provider themes={['dark', 'dark']} defaultTheme="dark">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
