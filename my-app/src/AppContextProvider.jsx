import React, { createContext, useState, useEffect } from 'react'
import { KEY_LOCAL_STORAGE } from './const'


//On simule un modéle de donée (tableau de list)
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



export const AppContext = createContext({})


const AppContextProvider = ({ children }) => {
    // on utilise un hooks d'état pour pouvoir moifier la page
    // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
    const [myLists, setMyList] = useState(defaultLists)
    const [open, setOpen] = useState(false)


    //On utilise un useEffect pour utiliser un effet
    useEffect(() => {
        const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (mydataFromStorage)
            setMyList(mydataFromStorage)
    }, [])




    useEffect(() => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
    }, [myLists])

    //on crée une fonction pour ajouter un élément à la liste
    const addList = (title) => {

        //on pousse un nouvelle élément dans le tableau de liste

        myLists.push({ title, items: [] })

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {

        //on enléve le dernier élément du tableau de list
        myLists.pop()

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    //Je rajoute un item dans une list
    // j'ai besoin de savoir dans quelle list je rajouite l'item
    const addItem = (list) => {

        myLists.forEach((myList) => {
            //Si ma list est la list passer en argument
            if (myList === list) {
                myList.items.push({ title: 'new Item' })
                //je rajoute un item à ma list
            }
        })
        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    //j'enlève le dernier item d'une list
    // j'ai besoin de savoir dans quelle list je rajouite l'item
    const removeItem = (list) => {
        myLists.forEach((myList) => {
            //Si ma list est la list passer en argument
            if (myList === list) {
                //je supprime un item à ma list
                myList.items.pop()
            }
        })
        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }

    const value = {
        myLists,
        open,
        addList,
        removeList,
        addItem,
        removeItem,
        setOpen
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider