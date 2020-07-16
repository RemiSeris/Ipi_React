import React, { useState } from 'react';
import CheckBox from '@material-ui/core/Checkbox'

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [check, setCheck] = useState(false)

    console.log('check')

    const toogleCheck = () => {
        if (check === true)
            setCheck(false)
        else
            setCheck(true)
    }

    return (
        <div onClick={toogleCheck}>
            {title}
            <CheckBox checked={check} />
        </div>
    )
}

export default Item