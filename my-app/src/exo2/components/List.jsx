import React from 'react'

const List = ({ children, title }) => {
    return (
        <div className={'list'}>
                <h2>{title}</h2>
                <h3>{children}</h3>
        </div>
    )
}

export default List