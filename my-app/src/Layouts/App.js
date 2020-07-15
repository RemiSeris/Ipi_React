import React from 'react';
import Item from '../components/Item';
import List from '../components/List';

const App = () => {

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
