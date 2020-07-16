import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'


const List = ({ children, title }) => {
    const [checked, setChecked] = useState(false)

    const toogleCheck = () => {
        // setChecked(!checked)
        if (checked === true)
            setChecked(false)
        else
            setChecked(true)
    }

    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            {/* Ici j'ajoute un switch de material UI, lorsque l'on click dessus il change d'état */}
            <Switch
                checked={checked}
                onChange={toogleCheck}
            />
        </div>
    )
}

export default List