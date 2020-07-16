<<<<<<< HEAD
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
=======
import React from 'react'


const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
        </div>
    )
}

export default List
>>>>>>> 7f9cf2a7268cd42ec1609f2b810e6fed6904dcb5
