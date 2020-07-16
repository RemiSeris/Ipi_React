import React from 'react';
import Item from '../components/Item';
import List from '../components/List';

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

    const defaultList

const App = () => {

    const [myLists, setMyList] = useState(lists)
    const changeTitle = () => {

    }

    const addList = () => {
        myLists.push({defaultList})
        setMyList(myLists.map(list => list))
    }

    const removeList = () => {
        myLists.pop()
        setMyList(MyLists.map(list => list))
    }

    return (
        <div>
            HELLO WORLD
            myLists.map({items, title}) =>
            <List title={title}>
            </List>

            <List title={"titre de ma liste"} classname='list'>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
                <Item title={"Hello World"}/>
            </List>
            <Button onClick={changeTitle} title="Add"></Button>
            <Button onClick={changeTitle} title="Delete"></Button>
        </div>
        )
}

export default App;
