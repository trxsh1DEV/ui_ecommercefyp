import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
// import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Home>asdsajio</Home> */}
      <Navbar />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
