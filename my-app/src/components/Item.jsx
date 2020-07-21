import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core';


const Item = ({ title }) => {
    // opn déclare une valriable d'état et un setter
    const [check, setCheck] = useState(false)
    
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };




    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        // si true on le passe à false et inversement
        if (check === true)
            setCheck(false)
        else
            setCheck(true)

    }

    return (
        <div >
            {title}
            {/* on utilise le component checkbox de material ui pour afficher l'état de notre item */}
            <CheckBox onChange={toogleCheck} checked={check} />
        </div>
    )
}


export default Item
