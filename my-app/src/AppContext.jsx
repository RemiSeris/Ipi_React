import React, { createContext, useState } from 'react'


const defaultLists = [
    {
        title: 'Liste 1',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    }
]

//onj déclare un template d'une list
const defaultList = {
    title: 'Nouvelle liste',
    items: [
        {
            title: 'item1',
        },
        {
            title: 'item2',
        },
        {
            title: 'item3',
        },
    ]
}

//  On crée notre context avec useContext et on l'export
export const CounterContext = createContext({})

//On déclare un component ContextProvider 
const Appcontext = ({ children }) => {
    //on déclare une valuer d'état et son setter
    const [myLists, setMylist] = useState(List)


    // on déclare notre objet valeur avec des valeurs et des méthodes
    const value = {
        count,
        setCount,
    }

    //on retourn notre Context.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}


export default AppContext