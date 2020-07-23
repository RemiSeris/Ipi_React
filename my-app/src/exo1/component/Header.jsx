import React from 'react';
import "../exo1.css"

const Header = ({ appName }) => {
    return (
        <div className={'header'}>
            <h2 className={'headerText'}>{appName}</h2>
        </div>
    );
};

export default Header;