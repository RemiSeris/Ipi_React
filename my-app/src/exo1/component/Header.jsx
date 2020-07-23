import React from 'react'

const Header = ({appName}) => {
    return (
        <div className={"Header"}>
        <h1>{appName}</h1>
        </div>
    )
}

export default Header