import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Item from '../components/Item';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';


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

const defaultList =
{
    title: 'Liste ',
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

    const [myLists, setMyList] = useState(lists)

    useEffect(() => {
        var mydataFromLocalStorage = JSON.parse(localStorage.getItem('myListState'))
        if (mydataFromLocalStorage)
        setMyList(mydataFromLocalStorage)

    }, [])
 //j'enregistre quand variable d'etat myList Change
    useEffect(() => {
        localStorage.setItem('myListState',JSON.stringify(myLists))
    },[myLists])


    const addList = () => {
        console.log("click ajoute")
        myLists.push(defaultList)
        const listCpy = myLists.map(list => list)
        setMyList(listCpy)
        console.log('myList',myLists)
    }

    const removeList = () => {
        console.log("click supprime")
        myLists.pop()
        const listCopy = myLists.map(list => list)
        setMyList(listCopy)
    }

    return (
        <div className='layout'>
            <div>
                <div className='buttonContenair' >
                    <div>
                        <Button variant="contained" color="primary" onClick={addList}>ajouter</Button>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary" onClick={removeList} startIcon={<DeleteIcon />}>Supprimer</Button>
                    </div>
                </div>
                
            
                <div className='layout'>
                    {
                        myLists.map(({ items, title }) =>
                            <List title={title}  >
                                {
                                    items.map(({ title: itemTitle }) => <Item title={title} />)
                                }
                            </List>
                        )}

                </div>

            </div>


        </div>
    )
}


export default App;
