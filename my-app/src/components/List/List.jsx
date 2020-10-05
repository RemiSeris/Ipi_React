import React from 'react';
import './index.css';

const List = ({ children, title }) => {
    return <div className={"root-list"}>
        <div className={"title-list"}>
            <h1>{ title }</h1>
        </div>
        <div>
            {children}
        </div>
    </div>
}

export default List