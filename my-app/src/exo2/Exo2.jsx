import React from 'react'
import "./exo2.css";
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
    return (
        <div className={"exo2"}>
            {
                lists.map((list) =>
                // On affiche nos lists une a une sous forme de component
                <List list={list} >
                    {
                        // On affiche les items d'une liste une à une sous forme de component
                        lists.items.map((title) => <Item title={title} />)
                    }
                </List>
                )}
        </div>
    )
}

export default Exo2