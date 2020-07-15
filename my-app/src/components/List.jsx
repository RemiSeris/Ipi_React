import React from 'react'


const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            {title}
            {children}
        </div>
    )
}

export default List