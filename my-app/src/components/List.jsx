import React from 'react'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'


const List = ({ children, title }) => {
    const [checked, setChecked] = useState(false)
    const toggleCheck = () => {
        if (checked)
            setChecked(false)
        else
            setChecked(true)
    }


    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
                <Switch
                checked={checked}
                onChange={toggleCheck}
                ></Switch>
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            
        </div>
    )
}

export default List