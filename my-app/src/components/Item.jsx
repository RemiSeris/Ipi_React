import React,{useState} from 'react'
//créer un état actif non actif par le hooks d'état {useState}
// quand on clique sur l'item on change l'état
//selon l'état on applique une classe css active ou non active

const Item = ({ title }) => {
    const[done, toogleDone]=useState(false)

    const changeItemState=() =>{
        //si l'item est à done true on le passe à done false
        if (done === true)
            toogleDone(false)
        //si l'item est à done false, on le passe à done true
        else
            toogleDone(true)
    }

    //tout ceci ci-dessus peut aussi s'écrire comme ça:
    //const changeItemState=()=> toogleDone(!done)

    //equivalent d'une arrow fonction:
    /*function changeItemState(){

    }*/

    console.log('is Item Done?',done)

    //on passe la classe en variable:
    //rappel, condition? si ma condition est remplie: si ma condition n'est pas remplie
    const itemClassName=done === false?"item":"item itemDone"

    //condition sans le mode ternaire:
    /*let itemClassName="item"
    if(done===true)
        itemClassName="item itemDone"
    */

    return (
        <div className={itemClassName} onClick={changeItemState}>
            {title}
        </div>
    )
}

export default Item