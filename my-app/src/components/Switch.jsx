import React,{useState} from 'react'

const Switch = () => {

    const [switchActive, toogleSwitch]=useState(false)


    //active et désactive notre switch

    const onSwitchClick = ()=> {
        if (switchActive ===true)
        toogleSwitch(false)
        else
        toogleSwitch(true)
    }

    let switchButtonClassName =''
    //rappel condition ternaire:
    //condition ? si la condition est validée: si la condition pas validee
    //dans notre cas:
    //switchActive === true?'switchButton switchActive':'switchButton switchUnActive'

    if(switchActive ===true)
        switchButtonClassName='switchButton switchActive'
    else
        switchButtonClassName='switchButton switchUnActive'

    return (
        <div className={'switchContainer'}onClick={onSwitchClick}>
            <div className={switchButtonClassName}/>
        </div>
        
    )
}



export default Switch