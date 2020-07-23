import React from 'react'
import { useState } from 'react'

const Item = ({ title }) => {

    const [item, changeItemClass] = useState('item')

    const changeClass = () => {
        item === 'item' ? changeItemClass('item itemActive') : changeItemClass('item')
    }

    return (
        <button className={item} onClick={changeClass}>
            <h4>{title}</h4>
        </button>
    )
}


export default Item