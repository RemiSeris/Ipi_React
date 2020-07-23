import React from 'react';
//import './content.css';

const Content = ({ children }) => {
    return (
        <div className={'content'}>
            <p className={'content__text'}>{children}</p>
        </div>
    );
};

export default Content;