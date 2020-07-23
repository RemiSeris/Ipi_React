import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff8f55',
      main: '#eb5e28',
      dark: '#b22c00',
      contrastText: '#000',
    },
    secondary: {
      light: '#4d4c49',
      main: '#252422',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
