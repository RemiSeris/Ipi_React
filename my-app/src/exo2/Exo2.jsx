import React from 'react'
import "./exo2.css"
import List from './components/List'
import Item from './components/Item'

const lists = [
    {
        title: 'Liste de course',
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
        title: 'Liste de sport',
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
        title: 'Liste de prénom',
        items: [
            {
                title: 'Pierre'
            },
            {
                title: 'Sylvie'
            }
        ]
    }
]
const Exo2 = () => {
    return (
        <div className={"exo2"}>
            {
                lists.map( ({items, title}) => {
                    return <List  title={title}>
                         {items.map(({title: itemsTitle}) => {
                       return <Item title={itemsTitle}/>
                    })}  
                    </List>
                })
            }
        </div>
    )
}

export default Exo2