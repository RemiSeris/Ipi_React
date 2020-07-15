import React from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '../components/Button';

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

/*
 1 L'utilisation de la methode sur les Array
 2 la descontruction d'objet
*/


const App = () => {

    const obj = {
        key1: "a",
        key2: 'b'
    }

    const { key1, key2 } = obj

    console.log(obj.key1)

    console.log(key1)

    return (
        <div className='layout'>
            {
                myLists.map(({ items, title }) =>
                    <List title={title}>
                        {
                            items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                )}
            <Button onClick={changeTitle} title={"Add"} />
            <Button onClick={changeTitle} title={"delete"} />
        </div>
    )
}


export default App;
