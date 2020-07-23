import React from 'react';
import "../exo1.css"

const Content = ({ children }) => {
    return (
        <div className={'content'}>
            <p className={'contentText'}>{children}</p>
        </div>
    );
};

export default Content;