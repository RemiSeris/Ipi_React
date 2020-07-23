import React from 'react'
import "./exo2.css"
import List from './components/List'
import Item from './components/Item'

const lists = [
    {
        title: 'liste 1',
        items: [
            {
                title: 'Item'
            },
            {
                title: 'Item'
            }
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'Item'
            },
            {
                title: 'Item'
            }
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'Item'
            },
            {
                title: 'Item'
            }
        ]
    }
]
const Exo2 = () => {
    return (
        <div className={"exo2"}>
            {lists.map(({ items, title }, index) => {
                    return <List title={title} key={index}>
                        {items.map(({ title: itemTitle }, indexItem) => {
                            return <Item title={itemTitle} key={index + '-' + indexItem} ></Item>
                        })}
                    </List>
            })
            }
        </div>
    )
}

export default Exo2