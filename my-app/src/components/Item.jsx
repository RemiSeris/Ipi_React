<<<<<<< HEAD
import React, { useState } from 'react'
import CheckBox from '@material-ui/core/Checkbox'
=======
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
>>>>>>> 384b316966ec612085aad13ee98f738ae7434c7a


const Item = ({ title }) => {
    // opn déclare une valriable d'état et un setter
    const [check, setCheck] = useState(false)

<<<<<<< HEAD

    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        // si true on le passe à false et inversement
=======
    const boxCheck = () => {
        // setChecked(!checked)
>>>>>>> 384b316966ec612085aad13ee98f738ae7434c7a
        if (check === true)
            setCheck(false)
        else
            setCheck(true)
<<<<<<< HEAD

=======
>>>>>>> 384b316966ec612085aad13ee98f738ae7434c7a
    }

    return (
        <div onClick={toogleCheck}>
            {title}
<<<<<<< HEAD
            {/* on utilise le component checkbox de material ui pour afficher l'état de notre item */}
            <CheckBox checked={check} />
=======
                  <FormControlLabel
        control={
          <Checkbox
            check={check}
            onChange={boxCheck}
            color="primary"
          />
        }
      />
>>>>>>> 384b316966ec612085aad13ee98f738ae7434c7a
        </div>
    )
}


export default Item
