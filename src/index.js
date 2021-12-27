import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AcessoGlobal } from './AcessoGlobal';

ReactDOM.render(
  <React.StrictMode>
    <AcessoGlobal>
      <App />
    </AcessoGlobal>
  </React.StrictMode>,
  document.getElementById('root')
);
