import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core';


const Item = ({ title }) => {
    // opn déclare une valriable d'état et un setter
    const [check, setCheck] = useState(false)
    
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };

  console.log('is checked', check);


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
            {`${title} `} <Checkbox
        checked={check}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        </div>
    )
}


export default Item
