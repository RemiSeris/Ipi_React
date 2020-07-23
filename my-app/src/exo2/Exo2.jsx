import React from 'react'
import Items from './components/Item'
import List from './components/List'
import "./exo2.css"
import { useState } from 'react'

const defaultLists = [
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
    const [myList, setLyList] = useState(List)


    return (
        <div className={"exo2"}>
            {
                myList.map(({ items, title }) =>
                    <List title={title}>
                        {items.map(({ title: itemTitle }) => <Items title={itemTitle} />)}

                    </List>
                )}


        </div >
    )
}

export default Exo2