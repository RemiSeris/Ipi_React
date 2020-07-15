import React from 'react';

const List = ({children, title, classname}) => {
    return (
    <div className={classname}>
         {title}
         {children}
    </div>
    )
}

export default List;