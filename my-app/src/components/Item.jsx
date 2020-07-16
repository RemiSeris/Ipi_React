import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [check, setCheck] = useState(false)

    const toogleCheck = () => {
        setCheck(!check)
    }

    return (
        <div onchange={toogleCheck}>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {title}
        </div>
    )
}

export default Item