import React from 'react'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check';


const List = ({ children, title, state, callbackFromParent, index }, props) => {
    const [checked, setChecked] = useState(state)
    const toggleCheck = () => {
        if (checked)
            setChecked(false)
        else
            setChecked(true)
        callbackFromParent(index, !checked);
    }


    return (
        <div className={'list ' + index}>
            <div className="listTitle">
                {state === true
                    ? <CheckIcon color="primary" />
                    : <ClearIcon color="secondary" />
                }
                {title}
                <Switch color="primary" checked={state} onChange={toggleCheck}></Switch>
            </div>
            <div className={'listItems'}>
                {children}
            </div>
        </div>
    )
}

export default List