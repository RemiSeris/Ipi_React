import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
import CounterContextProvider from './CounterContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CounterContextProvider />
  </React.StrictMode>,
  document.getElementById('root')
);
