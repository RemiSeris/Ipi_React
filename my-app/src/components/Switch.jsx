import React, { useState } from 'react'

const Switch = () => {

    const [switchActive, toogleSwitch] = useState(false)

    // ici on active désactive notre switch
    const onSwitchClick = () => {
        if (switchActive === true)
            toogleSwitch(false)
        else
            toogleSwitch(true)
    }

    //condition ? si la condition est validé : si la condition n'est pas validé

    let switchButtonClassName = switchActive === true ? 'switchButton switchActive' : 'switchButton switchUnActive'

    // if (switchActive === true)
    //     switchButtonClassName = 'switchButton switchActive'
    // else
    //     switchButtonClassName = 'switchButton switchUnActive'


    return (
        <div className={'switchContainer'} onClick={onSwitchClick}>
            <div className={switchButtonClassName} />
        </div>
    )
}

export default Switch