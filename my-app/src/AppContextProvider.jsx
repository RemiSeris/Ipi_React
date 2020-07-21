import React, { createContext, useState, useEffect } from 'react';
import List from '../components/List';
import Item from '../components/Item';
import { KEY_LOCAL_STORAGE } from '../const';




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

const App = () => {

    const [myLists, setMyList] = useState(defaultLists)

    useEffect(() => {
        const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (mydataFromStorage)
            setMyList(mydataFromStorage)
    }, [])

    useEffect(() => {
        const Mydatastorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (Mydatastorage)
            setMyList(Mydatastorage)
    }, [])

    useEffect(() => {
        const saveList = () => {
            localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
        }

    }, [myLists])



    useEffect(() => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
    }, [myLists])

    const addList = () => {

        myLists.push(defaultList)

        const listCpy = myLists.map(list => list)

        setMyList(listCpy)
    }

    const removeList = () => {

        myLists.pop()

        const listCpy = myLists.map(list => list)

        setMyList(listCpy)
    }
}

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

    //on retourn notre App.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;