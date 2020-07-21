import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
import AppContextProvider from '../AppContextProvider';

/*
//  On crée notre context avec useContext et on l'export
export const AppContext = createContext({})

//On déclare un component ContextProvider 
const AppContextProvider = ({ children }) => {
    //on déclare une valuer d'état et son setter
    const [count, setCount] = useState(0)


    // on déclare notre objet valeur avec des valeurs et des méthodes
    const value = {
        count,
        setCount,
    }

    //on retourn notre Context.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider
*/
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

