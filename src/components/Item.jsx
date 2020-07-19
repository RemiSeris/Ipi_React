import React from 'react';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';



const Item = ({ title }) => {
    const [check, setCheck] = useState(false)

    const toogleCheck = () => {
        if (check === true)
            setCheck(false)
        else
            setCheck(true)
    }

    return (
        <div>
            {title}
            <Checkbox
                color="default"
                onChange={toogleCheck}
                inputProps={{ 'aria-label': 'checkbox with default color' }} />

        </div>
    )

}


export default Item;