import React, {useState} from 'react'
import Switch from "@material-ui/core/Switch";

const Item = ({title}) => {
    const [switchValue, setSwitchValue] = useState(false);
    let switchClass = switchValue ? 'switchActive item' : 'item';

    const onSwitchChange = () => {
        setSwitchValue(!switchValue);
    };
    return (
        <div>
            <div className={switchClass} onClick={onSwitchChange}>
                {title}
            </div>
            <Switch
                checked={switchValue}
                onChange={onSwitchChange}
                name="checkedB"
                color="secondary"
            />
        </div>


    )
}

export default Item
