import React from 'react'
import React,{useState} from 'react'

const Switch = () => {

    const [switchactive, toogleswitch]=useState(false)

    const toogleswitch=()=>{
        if(switchactive===true)
       toogleswitch(false)
       else
       toogleswitch(true)

    }

    return (
        <div onClick={}toogleswitch>

        </div>
    )
}

export default Switch