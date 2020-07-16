//Lorsqu'on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#c8b1ff',
        main: '#9381ff',
        dark: '#5f54cb',
        contrastText: '#000',
      },
      secondary: {
        light: '#ffffa0',
        main: '#f9d66f',
        dark: '#c4a540',
        contrastText: '#000',
      },
    },
  });

/*
Create a component named List with the props children, display children in the HTML

const List = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    )
}

    Create A component named Item wich display "HELLO WORLD"
    Display List and Item in App
    Display a title to List "Ma list"
    Display many Items in a List
    Display Many List with many Items in App
    (optional) Display List title as a props name 'title'
    (optional) Display Item title as a props name 'title'

    End Exo 1*

    Create a Functionnal component called Item with border, shadow, and a "Hello World" in the center .
    Create a Functionnal component called List containing many Item
    Pass down the Item content as Props from the List component (item should display "Hello World 1", "Hello World 2", ...)
*/

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

    return (
        <MuiThemeProvider theme={theme}>
        <div className='layout'>
            <div className='btn-grp'>
                {/*    <Button title="Add" onClick={addList} classN={"btn-add"}></Button>
                <Button title="Delete" onClick={deleteList} classN={'btn-del'}></Button> */}

                <Button variant="outlined" color="primary" onClick={addList} startIcon={<EditIcon />} className={"btn-add"}>
                    Add
                </Button>
                <Button
                    onClick={deleteList}
                    variant="contained"
                    color="primary"
                    startIcon={<DeleteIcon />}>
                    Delete
      </Button>
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

/* function addList(){
    console.log('addList')
}

function deleteList(){
    console.log('deleteList')
} */

export default App;
