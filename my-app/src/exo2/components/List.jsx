import React from 'react'

const List = ({ title, children }) => {
    return (
        <div className={'list'}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default List