//Lorsque on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List/List';
import Item from '../components/Item/Item';
// import Button from '../components/Button/Button';
import { Button } from '@material-ui/core';

const templateList = {
    title: 'defaultTitle',
    items: []
}

const templateModel = [
    {
        title: 'List 1',
        items: [{
            title: 'Item 1',
            content: 'Content item 1'
        }]
    }
]


const App = () => {
    const [lists, setLists] = useState(templateModel)
    const addList = () => {
        lists.push(templateList)
        setLists([...lists])
    }
    const deleteList = () => {
        lists.pop()
        setLists([...lists])
    }

    return (
        <div className={"root-app"}>
            {lists.map((list) => 
                <List title={list.title}>
                    {list.items.map((item) => 
                        <Item title={item.title}>
                            {item.content}
                        </Item>
                    )}
                </List>)
            }
            <div className={"button-container"}>
                <Button onClick={addList} color="secondary" variant="contained">
                    {"Add"}
                </Button>
                <Button onClick={deleteList} color="secondary" variant="contained">
                    {"Delete"}
                </Button>
            </div>
        </div>
    )
}

export default App