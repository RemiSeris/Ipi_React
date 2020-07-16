import React from 'react'
import { useState } from 'react'


const Switch = () => {
    const [switchActive, toggleSwitch] = useState(false)

    const onSwitchClick = () => {
        if (switchActive === true)
            toggleSwitch(false)
        else
            toggleSwitch(true)

    }

    let switchButtonClassName = switchActive === true ? 'switch-button switch-active' : 'switch-button switch-unactive'
    let switchButtonContainerClassName = switchActive === true ? 'switch-container switch-container-active' : 'switch-container switch-container-unactive'
    

    return (
        <div className={switchButtonContainerClassName} onClick={onSwitchClick}>
            <div className={switchButtonClassName}></div>

        </div>
    )
}

export default Switch