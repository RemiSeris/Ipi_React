import React from 'react'
import List from './components/List'
import Item from './components/Item'
import "./exo2.css"

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
]
const Exo2 = () => {
    return (
        <div>
            {
                lists.map(list =>{
                    return <List title={list.title}></List>
                })
            }
        </div>
    )
}

export default Exo2