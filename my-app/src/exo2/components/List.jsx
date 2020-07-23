import React from 'react'
import Item from './Item';
const List = ({title, children}) => {
return (
    <div className="item">
        <h2 className='listTitle'>{title}</h2>
        {children}
    </div>
)
}

export default List;