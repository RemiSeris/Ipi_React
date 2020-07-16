import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';



const Item = ({ title }) => {

    const [checked, setChecked] = React.useState(true);
    const CheckBox = () => { }
    return (
        <div>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        </div>
    )

    return (
        <div className={"item"}>
            {title}
        </div>
    )
}
export default Item