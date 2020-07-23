import React from 'react'
import "./exo2.css"
import List from './components/List'
import Item from './components/Item'

const lists = [
    {
        title: 'liste de course',
        items: [
            {
                title: 'banane'
            },
            {
                title: 'pomme'
            }
        ]
    },
    {
        title: 'liste de sport',
        items: [
            {
                title: 'natation'
            },
            {
                title: 'athlétisme'
            }
        ]
    },
    {
        title: 'liste de prénom',
        items: [
            {
                title: 'Pierre'
            },
            {
                title: 'Silvie'
            }
        ]
    }
];
const Exo2 = () => {
    return (
        <div className={"exo2"}>
            {lists.map(({items, title}, index) => {
                return <List title={title} key={index}>
                    {items.map(({title: itemTitle}, indexItem) => {
                        return <Item title={itemTitle} key={index + '-' + indexItem}></Item>
                    })}
                </List>
            })
            }
        </div>
    )
}

export default Exo2
