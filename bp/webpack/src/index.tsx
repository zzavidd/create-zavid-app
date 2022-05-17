import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './app';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, div#root {
    height: 100%;
  }
`;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
