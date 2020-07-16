import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ title}) => {

    const [checkbox, setCheckbox] = useState(true);

    const toogleCheck = () => {
        if (checkbox === true)
            setCheckbox(false);      
        else 
            setCheckbox(true);       
    }

    return (
        <div onClick={toogleCheck}>
            {title}
            <Checkbox checked={checkbox}></Checkbox>
        </div>
    )
}

export default Item