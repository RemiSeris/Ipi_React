import React, { useState } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import Item from '../components/Item';


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

    

    return (
        <div className='layout'>

            {
                myLists.map(({ items, title }) => 
                    <List title={title}  >
                        {
                        items.map(({ title: itemTitle }) => <Item title={title} />)
                        }
                    </List>
                )}
                <Button onClick ={addList} title={'ajouter'}/>
                <Button onClick={removeList} title={'Supprimer'}/>
        </div>
    )
}


export default App;
