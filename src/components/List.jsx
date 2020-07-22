import React, { useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { Button } from '@material-ui/core';

const List = ({children,list}) => {
    const {addItem, removeItem} = useContext(AppContext)
    const {title} = list

    const createNewItem = () => {
        addItem(list)
    }

    const deleteItem = () => {
        removeItem(list)
    }

    return (

        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            <Button onClick={createNewItem} variant={"contained"}>
                {"Add Item"}
            </Button>
            <Button onClick={deleteItem} variant={"contained"}>
                {"Delete Item"}
            </Button>
        </div>
    )
}

export default List;