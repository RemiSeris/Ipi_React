import React, { useState } from 'react'
import CheckBox from '@material-ui/core/Checkbox'


const Item = ({ title }) => {
    // opn déclare une valriable d'état et un setter
    const [check, setCheck] = useState(false)


    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        // si true on le passe à false et inversement
        if (check === true)
            setCheck(false)
        else
            setCheck(true)

    }

    return (
        <div onClick={toogleCheck}>
            {title}
            {/* on utilise le component checkbox de material ui pour afficher l'état de notre item */}
            <CheckBox checked={check} />
        </div>
    )
}


export default Item
