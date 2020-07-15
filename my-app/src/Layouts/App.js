import React from 'react';
import Item from '../components/Item';
import List from '../components/List';

const App = () => {
    
constlists = [
    {
        title:'Liste 1',
        items: [
            {
                title:'item1',
            },
            {
                title:'item2',
            },
            {
                title:'item3',
            },
        ]
    },
    {
        title:'Liste 2',
        items: [
        {
            title:'item1',
        },
        {
            title:'item2',
        },
        {
            title:'item3',
        },
        ]
    },
    {
        title:'Liste 3',
        items: [
        {
            title:'item1',
        },
        {
            title:'item2',
        },
        {
            title:'item3',
        },
        ]
    }
    ];

    return (
        <div >
            HELLO WORLD
            <List title={"titre de ma liste"} classname='list'>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
            </List>
        </div>
        )
}

export default App;
