import './App.css';

import React from 'react';
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CustomTheme } from './styles/theme';
import { AuthProvider } from './components/auth/AuthContext';
import ErrorBoundary from './components/errors/ErrorBoundary';
import AppRoutes from './routes'

const theme = createTheme(CustomTheme)

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
          <BrowserRouter>
            <CssBaseline />
            <AuthProvider>
                <ErrorBoundary>
                    <AppRoutes />
                </ErrorBoundary>
            </AuthProvider>
          </BrowserRouter>
        {/* </Provider> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
