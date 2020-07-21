import React, { createContext, useState, useEffect } from 'react'
import List from './components/List'
import Item from './components/Item'
import Button from '@material-ui/core/Button'
import { KEY_LOCAL_STORAGE } from './const'



//  On crée notre context avec useContext et on l'export
//6
export const AppContext = createContext({})
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


//On déclare un component ContextProvider 
const AppContextProvider = ({ children }) => {
    const [myLists, setMyList] = useState(defaultLists)
    console.log(myLists, "hello")


    //On utilise un useEffect pour utiliser un effet
    useEffect(() => {
        
        const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (mydataFromStorage)
            setMyList(mydataFromStorage)
    }, [])


    //Utilisation de UseEffect

    /*useEffect(() => {, '
        const mydatafromstorage = JSON.parse(localStorage.getItem('lastlist'))
        if (mydatafromStorage)
            setMyList(mydatafromStorage)
    }, [])*/
    
    useEffect((myLists) => {
        localStorage.setItem('myLists', JSON.stringify(myLists))
    }, [myLists])


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


    //on déclare une valuer d'état et son setter
   


    // on déclare notre objet valeur avec des valeurs et des méthodes
    const value = {
        myLists,
        setMyList,
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
            <div>
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <Button variant="contained" color="secondary" title='add' onClick={addList}>Add</Button>
            {/*<Button test1={'test1'} test2={"test2"} onClick={addList} title={'Add'} />*/}
            <Button variant="contained" color="secondary" onClick={removeList} title='delete'>Delete</Button>
            {/*<Button onClick={removeList} title={'delete'} />*/}
            </div>
            
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={addList} variant='contained'>
                    {"ADD"}
                </Button>
                <Button onClick={removeList}>
                    {"DELETE"}
                </Button>
                {/* 
                <Button onClick={addList} title={'Add'} />

                <Button onClick={removeList} title={'delete'} /> 
                */}
            </div>
        </AppContext.Provider>
    )
}


export default AppContextProvider
