import React, { useState } from 'react'
import "./exo2.css"
import List from './components/List';
import Item from './components/Item';


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

    const [classCss, setClassCss] = useState('item'); 


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