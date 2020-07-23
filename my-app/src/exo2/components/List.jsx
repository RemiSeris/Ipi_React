import React from 'react'

const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default List