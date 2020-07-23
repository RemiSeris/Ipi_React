import React from 'react';
//import './header.css'

const Header = ({ appName }) => {
    return (
        <div className={'header'}>
            <h2 className={'header__title'}>{appName}</h2>
        </div>
    );
};

export default Header;