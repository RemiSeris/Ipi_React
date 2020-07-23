import React, { useState } from 'react'


const Item = ({ title }) => {
    const [done, toogleDone] = useState(false)



    const changeItemState = () => {
        if (done === true)
            toogleDone(false)
        else
            toogleDone(true)
    }

    let itemClassName = "item"

    if (done === true)
        itemClassName = "itemDone"


    return (
        <div className={itemClassName} onClick={changeItemState}>
            {title}
        </div>
    )
}

export default Item