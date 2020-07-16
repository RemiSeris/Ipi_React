import React from 'react';
import Switch from '../components/Switch';

const Item = ({ title }) => {
    return (
        <div className={"item"}>
            {title}
            <Switch></Switch>
        </div>
    )
}

export default Item