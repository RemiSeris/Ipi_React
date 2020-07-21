<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from 'react'
>>>>>>> bdc5cdf56cb7a1294b82d0a3662c7894586f1510
import CheckBox from '@material-ui/core/Checkbox'


const Item = ({ title }) => {
<<<<<<< HEAD
=======
    // opn déclare une valriable d'état et un setter
>>>>>>> bdc5cdf56cb7a1294b82d0a3662c7894586f1510
    const [check, setCheck] = useState(false)

    console.log('check')

<<<<<<< HEAD
    const toogleCheck = () => {
=======
    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        // si true on le passe à false et inversement
>>>>>>> bdc5cdf56cb7a1294b82d0a3662c7894586f1510
        if (check === true)
            setCheck(false)
        else
            setCheck(true)
<<<<<<< HEAD
    }

    return (
        <div onClick={toogleCheck}>
            {title}
=======

    }

    return (
        <div >
            {title}
            {/* on utilise le component checkbox de material ui pour afficher l'état de notre item */}
>>>>>>> bdc5cdf56cb7a1294b82d0a3662c7894586f1510
            <CheckBox onChange={toogleCheck} checked={check} />
        </div>
    )
}


export default Item
