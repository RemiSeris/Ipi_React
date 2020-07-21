import React, { createContext, useState } from 'react'
import myLists, items, title from 'AppContext'



//  On crée notre context avec useContext et on l'export
//6
export const AppContext = createContext({})

//On déclare un component ContextProvider 
const CounterContextProvider = ({ children }) => {
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
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map(({ items, title }) =>
                    // On affiche nos lists une a une sous forme de component
                    <List title={title} myProps={"zeaaze"} >
                        {
                            // On affiche les items d'une liste une à une sous forme de component
                            items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                )}
        </AppContext.Provider>
    )
}


export default CounterContextProvider
