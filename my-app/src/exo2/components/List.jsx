import React from 'react'

const List = ({ title, children }) => {
    return (
        <div className={'list'}>
            {title}
            {children}
        </div>
    )
}

export default List