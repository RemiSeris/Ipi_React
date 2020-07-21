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
    const dropMyItem = (itemsel) => {
       myLists.forEach((x,index)=> {
            x.items.forEach((x)=>{
                if(x === itemsel){
                    // myLists.splice(1,index,newListItem);
                }
           })
        });
       // console.log(monItem,'mon item');
    };

    return (
        <div style={{display : "flex", justifyContent: 'center', alignItems : 'center'}}>
            <div className={switchClass} style={{cursor: "pointer"}} onClick={onCheckChange}>
                {item.title}
            </div>
            <Checkbox color={"secondary"} checked={checkValue} onChange={onCheckChange} />
            <Button  variant={'outlined'} size={"small"} style={{height: 20}} onClick={dropMyItem(item)} >x</Button>
        </div>


    )
};

export default Item
