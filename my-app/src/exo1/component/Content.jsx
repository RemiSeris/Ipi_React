import React from 'react'
import "../exo1.css";


const Content = ({children}) => {

    return (
        <div className={"content"}>
            {children}
        </div>
    )
}

export default Content