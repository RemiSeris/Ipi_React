import React, {useState} from 'react'
import Checkbox from "@material-ui/core/Checkbox";

const Item = ({title}) => {
    const [checkValue, setCheckValue] = useState(false);
    let switchClass = checkValue ? 'switchActive item' : 'item';

    const onCheckChange = () => {
        setCheckValue(!checkValue);
    };
    return (
        <div style={{display : "flex"}}>
            <div className={switchClass} onClick={onCheckChange}>
                {title}
            </div>
            <Checkbox color={"secondary"} checked={checkValue} onChange={onCheckChange} />
        </div>


    )
}

export default Item
