//Lorsqu'on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#deffff',
            main: '#abdafc',
            dark: '#7aa9c9',
            contrastText: '#000',
        },
        secondary: {
            light: '#b8336a',
            main: '#b8336a',
            dark: '#840040',
            contrastText: '#fff',
        },
    },
});

//On simmule un modèle de données (tableau de liste)
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

//On déclare un template de liste
const nouvelleListe = {
    title: 'Nouvelle Liste',
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

//On déclare un component sous forme d'arrow function
const App = () => {

    const [myList, setMyList] = useState(lists)

    const addList = () => {
        myList.push(nouvelleListe)
        setMyList(myList.map(list => list))
    }

    const deleteList = () => {
        myList.pop()
        setMyList(myList.map(list => list))
    }

    const saveList = () => {
        localStorage.setItem('list', JSON.stringify(myList))
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div className='layout'>
                <div className='navbar'>
                    <Button variant="contained" color="primary" onClick={saveList} startIcon={<SaveIcon />} className={"btn-add"}>
                        Save List
                    </Button>
                    <div className='btn-grp'>
                        <Button variant="outlined" color="secondary" onClick={addList} startIcon={<EditIcon />} className={"btn-add"}>
                            Add
                        </Button>
                        <Button onClick={deleteList} variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </div>
                </div>
                {myList.map(({ items, title }, index) => {
                    return <List title={title} key={index}>
                        {items.map(({ title: itemTitle }, index) => {
                            return <Item title={itemTitle}></Item>
                        })}
                    </List>
                })}
            </div>
        </MuiThemeProvider>
    )
}

export default App;
