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
                lists.map(({ items, title }, index) => {
                    return <List title={title}  >
                        {items.map(({ title: itemTitle }, index) => {
                            return <Item title={title} />
                        })}
                    </List>
                })}
                <button onClick={changetitle} title={"ADD"}></button>
                <button onClick={changetitle} title={"DELETE"}></button>
        </div>
    )
    
}


export default App;
