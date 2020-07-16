import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'

const Item = ({ title}) => {

    const [checkbox, setCheckbox] = useState(true);

    return (
        <div className={"item"}>
            {title}
            <Checkbox></Checkbox>
        </div>
    )

    const toggleCheck = () => {
        if (checkbox == true){
            setCheckbox(false);
        }
        else {
            setCheckbox(true);
        }
    }

}



export default Item