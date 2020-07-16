//Lorsqu'on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import input from '../components/Input'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'


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
var cmpListe = 4;

const newListe = {
    
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
        newListe.title = "Ligne " + cmpListe
        myList.push(newListe)
        setMyList(myList.map(list => list))
        cmpListe++
    }

    const deleteList = () => {
        myList.pop()
        setMyList(myList.map(list => list))
        cmpListe--
    }
    
    return [
        <div className='layout'>
            <div className='btn-grp'>
                <Button onClick={addList}>Add</Button>
                <Button onClick={deleteList}>Delete</Button>
            </div>
            {myList.map(({ items, title }, index) => {
                return <List title={title} key={index}>
                    {items.map(({ title: itemTitle }, index) => {
                        return <Item title={itemTitle}></Item>
                    })}
                </List>
            })}

            {/* test d'un input
            <div>
                <form>
                <label>
                    Nom :
                    <input type="text" name="name" id="inputTest"></input>
                </label>
                <input type="submit" value="Envoyer" onClick={() => { alert('Bonjour ' + document.getElementById('inputTest').value) }}></input>
                </form>
            </div>            */}
        </div>

                   
    ];
}

export default App;
