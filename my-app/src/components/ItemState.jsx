import React, { useState } from 'react';

const ItemState = () => {
    const [done, toogleDone] = useState(false)

    const changeState = () => {
        if (done === true)
            toogleDone(false)
        else
            toogleDone(true)
    }

    const ItemClassName = done === false ? "itemUndone" : "itemDone"

    return (
        <div className={"Item"} onClick={changeState}>

        </div>
    )
}

export default ItemState
