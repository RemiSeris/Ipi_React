import React from 'react'

const Header = ({appName}) => {
    return (
        <div className={"appName"}>
            <h1>{appName}</h1>
        </div>
    )
}


export default Header