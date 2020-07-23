import React from 'react'


const List = ({children, title}) => {
    return (
        <div className={'list'}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default List
