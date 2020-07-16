import React, { useState } from 'react'

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [done, toogleDone] = useState(false)



    const changeItemState = () => {
        //si l'item est a  done true on le passe à done false
        if (done === true)
            toogleDone(false)
        else
            toogleDone(true)

        //si l'item est à done false, on le passe à donne true
    }

    console.log('is Item Done ?', done)

    // condition ? si ma condition est rempli : si ma condition n'est pas remlie

    // const itemClassName = done === false ? "item" : "item itemDone"

    let itemClassName = "item"

    if (done === true)
        itemClassName = "item itemDone"


    return (
        <div className={itemClassName} onClick={changeItemState}>
            {title}
            <Switch></Switch>
        </div>
    )
}

export default Item