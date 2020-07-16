import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [check, setCheck] = useState(false)

    const boxCheck = () => {
        // setChecked(!checked)
        if (check === true)
            setCheck(false)
        else
            setCheck(true)
    }

    return (
        <div >
            {title}
                  <FormControlLabel
        control={
          <Checkbox
            check={check}
            onChange={boxCheck}
            color="primary"
          />
        }
      />
        </div>
    )
}


export default Item
