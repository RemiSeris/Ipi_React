import React, { createContext, useState } from 'react'



//  On crée notre context avec useContext et on l'export
export const CounterContext = createContext({})

//On déclare un component ContextProvider 
const CounterContextProvider = ({ children }) => {
    //on déclare une valuer d'état et son setter
    const [nb, setNb] = useState(0)


    // on déclare notre objet valeur avec des valeurs et des méthodes
    const value = {
        nb,
        setNb,
    }

    //on retourn notre Context.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}


export default CounterContextProvider