import React, { useState } from 'react';
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

    const addList = () => {
        console.log("click ajoute")
        myLists.push(defaultList)
        const listCopy = myLists.map(list => list)
        setMyList(listCopy)
    }

    const removeList = () => {
        console.log("click supprime")
        myLists.pop()
        const listCopy = myLists.map(list => list)
        setMyList(listCopy)
    }

    const saveList = () => {
        localStorage.setItem('myListState',JSON.stringify(lists))
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
                    <div>
                        <Button variant="contained" startIcon={<SaveIcon />} onClick={saveList}>Sauver</Button>
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
