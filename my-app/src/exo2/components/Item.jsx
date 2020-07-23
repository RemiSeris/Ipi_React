import React from 'react'
import { useState } from 'react'

const Item = ({ title }) => {

    const [classItem, changeItemClass] = useState('item')

    const changeClass = () => {
        classItem === 'item' ? changeItemClass('item itemActive') : changeItemClass('item')
    }

    return (
        <button className={classItem} onClick={changeClass}>
            <p>{title}</p>
        </button>
    )
}

export default Item