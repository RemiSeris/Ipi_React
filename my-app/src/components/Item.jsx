import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core';

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [check, setCheck] = useState(false)
    
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };

  console.log('is checked', check);

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