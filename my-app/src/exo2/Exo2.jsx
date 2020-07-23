import React, { useState } from 'react';
import "./exo2.css";
import Item from "./components/Item";
import List from "./components/List";

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

const AppContextProvider = ({ children }) => {
    const [myLists, setMyList] = useState(lists)
}

const Exo2 = () => {
    return (
        <div className={"exo2"}>
            <List>
                {
                    <Item />
                }
            </List>
        </div>
    )
}

export default Exo2