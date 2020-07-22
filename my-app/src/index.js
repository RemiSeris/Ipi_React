import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
<<<<<<< HEAD
import AppContextProvider from '../AppContextProvider';
=======
import AppContextProvider from './AppContextProvider';
>>>>>>> fb0945c47c67ba2f8064752cf54870cbdabf21a3

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

