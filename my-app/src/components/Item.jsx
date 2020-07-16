import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [checkBoxVal, setMyCheckbox] = useState(true)

    const toggleCheck = () => {
        checkBoxVal ? setMyCheckbox(false) : setMyCheckbox(true)
        console.log(checkBoxVal)
    }

    return (
        <div onChange={toggleCheck}>
            {title}
            <Checkbox></Checkbox>
        </div>
    )
}

export default Item