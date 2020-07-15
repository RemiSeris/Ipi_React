import React from 'react';
import Button from '../components/Button';
import Item from '../components/Item';
import List from '../components/List';

const lists = [
    {
    title: 'Liste 1',items: [{ title: 'item1',},
    {title: 'item2',},
    {title: 'item3',},
    ]},
    {title: 'Liste 2',items: [{title: 'item1',},
    {title: 'item2',},
    {title: 'item3',},
    ]},
    {title: 'Liste 3',items: [{title: 'item1',},
    {title: 'item2',},
    {title: 'item3',},
    ]}
   ]

const App = () => {

    return (
        <div >
            <Button></Button>
            <List title={"Titre de liste 1"}>
            <Item title={"Titre de item 1"}/>
            </List>
            
        </div>)
}

export default App;
