import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
import AppContextProvider from "./components/appContextProvider";

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
