import React, { useState } from 'react'

const Item = ({ title }) => {

    const [check, setCheck] = useState('item')

    const toogleCheck = () => {
        if (check === 'item')
            setCheck('item itemDone')
        else
            setCheck('item')
    }

    return (
        <button className={check} onClick={toogleCheck}>
            {title}
        </button>
    )
}


export default Item