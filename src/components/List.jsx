import React from 'react';

const List = ({children,title}) => 
        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
        </div>

export default List;