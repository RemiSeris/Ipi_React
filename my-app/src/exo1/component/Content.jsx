import React from 'react'

const Content = ({ children }) => {
    return (
        <div className={"content"}>
            <p>{children}</p>
        </div>
    )
}

export default Content