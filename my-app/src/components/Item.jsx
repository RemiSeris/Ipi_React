import React, {useContext, useState} from 'react'
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {appContext} from "./appContextProvider";

const Item = ({item}) => {
    const [checkValue, setCheckValue] = useState(item.validate);
    const {myLists, setMyList} = useContext(appContext);
    let switchClass = checkValue ? 'switchActive item' : 'item';

    const onCheckChange = () => {
        setCheckValue(!checkValue);
    };
    const dropMyItem = () => {
        let listItemCopy, listCopy, listIndex;
        const x = myLists.find((y, index2) => {
            return y.items.find((x, index) => {
                if (x === item) {
                    y.items.splice(index, 1);
                    listItemCopy = y.items.map(list => list);
                }
                listIndex = index2;
                return x === item;
            });
        });
            myLists.splice(listIndex, 1, x);
            listCopy = myLists.map(items => items);
            setMyList(listCopy);
    };

    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
            <div className={switchClass} style={{cursor: "pointer"}} onClick={onCheckChange}>
                {item.title}
            </div>
            <Checkbox color={"secondary"} checked={checkValue} onChange={onCheckChange}/>
            <Button variant={'outlined'} size={"small"} style={{height: 20}} onClick={dropMyItem}>x</Button>
        </div>


    )
};

export default Item
