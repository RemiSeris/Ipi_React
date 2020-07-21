import React, { createContext, useState } from 'react'



//  On crée notre context avec useContext et on l'export
export const appContext = createContext({})

//On déclare un component ContextProvider 
const appContextProvider = ({ children }) => {
    //on déclare une valuer d'état et son setter
    


    // on déclare notre objet valeur avec des valeurs et des méthodes
    


    //on retourn notre Context.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <appContext.Provider>
            {children}
        </appContext.Provider>
    )
}


export default appContextProvider