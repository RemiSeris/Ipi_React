//lien git du cours:
//https://github.com/RemisSeris/Ipi React

//On rajoute useEffect à l'import de React
import React, { useState,useEffect } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import {Button} from '@material-ui/core'


//On simule un modèle de données (tableau de list)
const lists = [
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

//on déclare un template d'une list
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

// on déclare un component sous forme d'arrow funtion 
const App = () => {
    // on utilise un hooks d'état pour pouvoir modifier la page
    // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
    const [myLists, setMyList] = useState(lists)


    //gestion du storage vide:
    useEffect(()=>{
        const mydataFromStorage= JSON.parse(localStorage.getItem('myLists'))
        //1er essai, null et indefined sont considérés de base comme faux
        /*if (mydataFromStorage!== undefined && mydataFromStorage!== null)
            setMyList ( mydataFromStorage)*/
        //autre façon qui suffit pour tous les cas et verifie si les objets existent bien(car null et indefined sont considérés de base comme faux):
        if (mydataFromStorage)
        setMyList ( mydataFromStorage)


    },[])

    

    //on crée une fonction pour ajouter un élément à la liste
    const addList = () => {

        //on pousse un nouvel élément dans le tableau de liste
        myLists.push(defaultList)

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'état de nos liste
        setMyList(listCpy)
    }

    //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {

        //on enlève le dernier élément du tableau de list
        myLists.pop()

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos listes
        setMyList(listCpy)
    }

    const saveList = () => {
        console.log('bouton sauvé?')
        localStorage.setItem('myLists',JSON.stringify(myLists))
    }

    return (
        <div className='layout'>
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiqué
                myLists.map(({ items, title }) =>
                    // On affiche nos lists une a une sous forme de component
                    <List title={title}  >
                        {
                            // On affiche les items d'une liste une à une sous forme de component
                            items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                      //on rajoute une div autour du bouton pour ne pas qu'il prenne toute la taille du contenair
                )}

               {/*on rajoute une div autour du bouton pour ne pas qu'il prenne toute la taille du contenair*/}
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Button onClick={addList}>
                        ADD
                    </Button>
                    <Button onClick={removeList}>
                        DELETE
                    </Button>
                </div>
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <div>
                <Button onClick={saveList}>
                            save the list
                </Button>
            </div>
        </div>
    )
}


export default App;
