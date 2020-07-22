import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
import AppContextProvider from './AppContextProvider';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
);
