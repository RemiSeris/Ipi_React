import React from 'react';
import CheckBox from '@material-ui/core/Checkbox'
import { useState } from 'react';



const Item = ({ title }) => {
    const [check, setCheck] = useState(false)
    const toogleCheck = () => {
        if (check === true)
            setCheck(false) //&& className="itemDone"
        else
            setCheck(true) //&& className="item"

        return (
            <div className="item">
                {title}
                <CheckBox onChange={toogleCheck} checked={check} />
            </div>
        )
    }
}


export default Item