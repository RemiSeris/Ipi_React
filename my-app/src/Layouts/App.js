import React from 'react';
import List from '../components/List'
import Item from '../components/Item'

/*
Create a component named List with the props children, display children in the HTML

const List = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    )
}

    Create A component named Item wich display "HELLO WORLD"
    Display List and Item in App
    Display a title to List "Ma list"
    Display many Items in a List
    Display Many List with many Items in App
    (optional) Display List title as a props name 'title'
    (optional) Display Item title as a props name 'title'

    End Exo 1*

    Create a Functionnal component called Item with border, shadow, and a "Hello World" in the center .
    Create a Functionnal component called List containing many Item
    Pass down the Item content as Props from the List component (item should display "Hello World 1", "Hello World 2", ...)
*/


const App = () => {

    return (
        <div >
            <List title={"titre de liste 1"} className='toto'>
                <Item title={"titre de item 1"} />
                <Item title={"titre de item 2"} />
                <Item title={"titre de item 3"} />
                <Item title={"titre de item 4"} />
            </List>
            <List title={"titre de liste 2"}>
                <Item title={"titre de item 1"} />
                <Item title={"titre de item 2"} />
                <Item title={"titre de item 3"} />
                <Item title={"titre de item 4"} />
            </List>
            <List title={"titre de liste 3"}>
                <Item title={"titre de item 1"} />
                <Item title={"titre de item 2"} />
                <Item title={"titre de item 3"} />
                <Item title={"titre de item 4"} />
            </List>
        </div>
    )
}


export default App;
