import React, { createContext, useState, useEffect } from 'react'


export const AppContext = createContext({})

//On simmule un modèle de données (tableau de liste)
const lists = [
    {
        title: 'Liste 1',
        state: false,
        items: [
            {
                title: 'item1',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item2',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item3',
                description: 'blah blaha',
                state: false
            },
        ]
    },
    {
        title: 'Liste 2',
        state: true,
        items: [
            {
                title: 'item1',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item2',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item3',
                description: 'blah blaha',
                state: false
            },
        ]
    },
    {
        title: 'Liste 3',
        state: true,
        items: [
            {
                title: 'item1',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item2',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item3',
                description: 'blah blaha',
                state: false
            },
        ]
    }
]

const AppContextProvider = ({children}) => {



    const [myList, setMyList] = useState(lists)
    // Observe les changements sur les onglets
    const [myTab, setMyTab] = useState(0)
    const [myListTitle, setMyListTitle] = useState('New List ' + myList.length)
    useEffect(()=>{
        let loadedList = JSON.parse(localStorage.getItem('list'))
        if(loadedList !== undefined && loadedList !== null){
           setMyList(loadedList)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(myList))
    },[myList])
    //mets à jour la progression d'une liste
    const changeList = (index, dataFromChild) => {
        myList[index].state = dataFromChild;
        setMyList(myList.map(list => list))
        //mets à jour les items de la liste en fonction de l'etat la liste
        myList[index].items.forEach(item => {
            item.state = dataFromChild
        })
        setMyList(myList.map(list => list))
    }

    const changeTab = (index) => {
        setMyTab(index)
    }

    
    //mets à jour l'etat de l'item d'une liste
    const changeListItem = (indexList, indexItem, dataFromChild) => {
        myList[indexList].items[indexItem].state = dataFromChild;
        setMyList(myList.map(list => list))

        //vérifie si toutes les items de la liste sont achevés, si c'est le cas, la liste passe aussi au statut achevé
        let isStateAllTrue = true;
        myList[indexList].items.forEach(item => {
            if (item.state !== true) {
                isStateAllTrue = false
            }
        })
        myList[indexList].state = isStateAllTrue;
        setMyList(myList.map(list => list))
    }

        //Supprime la dernière ligne de la liste
        const deleteListEntry = () => {
            myList.splice(myTab, 1)
            setMyList(myList.map(list => list))
            setMyTab(0)
        }

        const addListEntry = () => {
            const nouvelleListe = {
                title: '',
                state: false,
                items: []
            }
            nouvelleListe.title = myListTitle
    
            myList.push(nouvelleListe)
            setMyList(myList.map(list => list))
            setMyTab(0)
            setMyListTitle('New List ' + myList.length)
           
        }


        //ouvre la popup de suppression de liste
        const changeMyListTitle= (event) => {
            setMyListTitle(event.target.value)
        }

    const value = {
        myList,
        setMyList,
        myTab,
        setMyTab,
        changeList,
        changeTab,
        changeListItem,
        deleteListEntry,
        addListEntry,
        myListTitle,
        setMyListTitle,
        changeMyListTitle
    }


    

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )


}

export default AppContextProvider