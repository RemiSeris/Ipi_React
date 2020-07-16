import React from 'react'
import { useState } from 'react'

const Item = ({ title }) => {
    const [done, toggleDone] = useState(false)

    const changeItemState = () => {
        if (done === true)
            toggleDone(false)
        else
            toggleDone(true)
    }

    let itemDoneClassName = done === true ? 'item item-done' : 'item'
    return (
        <div className={itemDoneClassName} onClick={changeItemState}>
            {title}
        </div>
    )
}

export default Item