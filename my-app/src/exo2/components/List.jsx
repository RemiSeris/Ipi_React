import React from 'react'
import "../exo2.css";


const List = ({list}, {children}) => {

    return (
        <div>
            {list.title}
            {children}
        </div>
    )
}

export default List