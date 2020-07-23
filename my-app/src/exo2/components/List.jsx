import React from 'react'

const List = ({title, children}) => {
    return (
        <div className={"liste"}>
        <p>{title}</p>
        {children}
        </div>
    )
}

export default List