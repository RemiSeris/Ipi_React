import React, {useState} from 'react';

const Switch = () => {

    const[switchActive, toogleSwitch] = useState(false)


    const onSwitchClick = () => {
        if (switchActive === true) {toogleSwitch(false)
            
        } else {toogleSwitch(true)
            
        }
    }

    let switchButtonClassName = switchActive === true ? 'switchButton switchActive' : 'switchButton switchUnActive'


    return
    <div className={'switchContainer'} onClick={onSwitchClick}>
        <div className={'switchButton'} />
    </div>
}

export default Switch;