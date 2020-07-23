import React, { useState } from 'react'

const Item = ({ children, title }) => {

    const [classItem, changeItemClass] = useState('item')

    const changeClass = () => {
        classItem === 'item' ? changeItemClass('item itemActive') : changeItemClass('item')
    }

    return (
        <div classname={'list'}>
            <button className={classItem} onClick={changeClass}>
                {title}
            </button>
        </div>
    )
}

export default Item