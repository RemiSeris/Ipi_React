import React, { useState } from 'react';

const Switch = () => {
    const [switchActive, togleSwitch] = useState(false)

    const onSwitchClick = () => {
        if (switchActive === true)
            togleSwitch(false)
        else
            togleSwitch(true)
    }
let switchButtonClassName = switchActive === true ? 'switchButton switchActive' : 'switchButton switchUnActive'

    return (
        <div className={'switchContainer'} onClick={onSwitchClick}>
            <div className={switchButtonClassName} />
        </div>
    )
}

export default Switch