import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';
import './index.css';

const Item = ({ children, title }) => {
    let style = "components-item"

    const [done, setDone] = useState(false)
    const updateStatusTask = () => {
        if (done === true) {
            setDone(false)
        } else {
            setDone(true)
        }
    }

    if (done === true) style = "itemDone components-item "
    

    return <div className={"root-item"}>
        <div className={style} onClick={updateStatusTask}>
            <Checkbox checked={done}/>
            <div>
                <h3>{title}</h3>
            </div>
            <div className={"description-item"}>
                {children}
            </div>
        </div>
    </div>
}

export default Item