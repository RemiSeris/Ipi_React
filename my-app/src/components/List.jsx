import React from 'react';

const List = ({children, title}) => {
    return (
        <div>
            {title}
            {children}
        </div>
        )

}

export default List;