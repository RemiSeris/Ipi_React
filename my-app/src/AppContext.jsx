import React, { createContext, useState } from 'react'


const [myLists, setMyList] = useState(defaultLists)


//On utilise un useEffect pour utiliser un effet
useEffect(() => {
    const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (mydataFromStorage)
        setMyList(mydataFromStorage)
}, [])

useEffect(() => {
    const mydataFromstorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (mydataFromstorage)
        setMyList(mydataFromstorage)

}, [])



useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
}, [myLists])

//on crée une fonction pour ajouter un élément à la liste
const addList = () => {

    //on pousse un nouvelle élément dans le tableau de liste
    myLists.push(defaultList)

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


//  On crée notre context avec useContext et on l'export
export const Appcontext = createContext({})

//On déclare un component ContextProvider 
const Appcontext = ({ children }) => {
    //on déclare une valuer d'état et son setter



    // on déclare notre objet valeur avec des valeurs et des méthodes
    const value = {
        myLists,
        addList,
        removeList,
    }

    //on retourn notre Context.Provider et le children avec comme value les donées et fonctions que l'on souhaite utiliser par notre contexte
    return (
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}


export default AppContext