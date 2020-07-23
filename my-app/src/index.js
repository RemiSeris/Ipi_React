import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Layouts/App';
//import AppContextProvider from './AppContextProvider';
import Exo1 from './exo1/Exo1';
import Exo2 from './exo2/Exo2';
import Exo3 from './exo3/Exo3';
import Exo4 from './exo4/Exo4'

ReactDOM.render(
  <React.StrictMode>

    <Exo1 />

    <Exo2 />

  </React.StrictMode>,
  document.getElementById('root')
);
