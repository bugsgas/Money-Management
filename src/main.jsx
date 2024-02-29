import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FundProvider } from './context/FundContext';
import { NameProvider } from './context/NameContext';

ReactDOM.render(
  <React.StrictMode>
    <FundProvider>
      <NameProvider>
        <App /> 
      </NameProvider>
    </FundProvider>
  </React.StrictMode>,
  document.getElementById('root')
);