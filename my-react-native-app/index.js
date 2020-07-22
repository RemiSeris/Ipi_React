import { registerRootComponent } from 'expo';
import React from 'react'
import App from './App';
import AppContextProvider from './AppContextProvider'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#deffff',
        main: '#abdafc',
        dark: '#7aa9c9',
        contrastText: '#000',
      },
      secondary: {
        light: '#b8336a',
        main: '#b8336a',
        dark: '#840040',
        contrastText: '#fff',
      },
    },
  });
const AppWithProvider = () =>  <MuiThemeProvider theme={theme}><AppContextProvider><App></App></AppContextProvider></MuiThemeProvider>

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWithProvider);
