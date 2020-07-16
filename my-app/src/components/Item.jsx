import React, { useState } from 'react'
<<<<<<< HEAD
import CheckBox from '@material-ui/core/Checkbox'
=======
import Checkbox from '@material-ui/core/Checkbox';
>>>>>>> 137f4fed2f7c7d709ea502cf846ba75af53b1205


const Item = ({ title }) => {
<<<<<<< HEAD
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
=======
    const [cbox, setMyCheckbox] = useState(true)

    const toggleCheck = () => {
        cbox ? setMyCheckbox(false) : setMyCheckbox(true)
    }

    return (
        <div onChange={toggleCheck}>
            {title}
            <Checkbox color="secondary"></Checkbox>
>>>>>>> 137f4fed2f7c7d709ea502cf846ba75af53b1205
        </div>
    )
}


export default Item
