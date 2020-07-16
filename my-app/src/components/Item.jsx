import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

// créer un état par le hooks d'état (useState) actif non actif
// quand on clique sur l'item on change l'état
// selon l'état on applique une class css actif ou non actif

const Item = ({ title }) => {
    const [check, setCheck] = useState(false)

    return (
        <div>
            {title}<input type="checkbox" />
        </div>
    )
}


export default Item
