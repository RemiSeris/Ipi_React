import React, { useContext } from 'react'

const Header = ({appName}) => {

    return (
        <div>
            <div className={"Header"}>
                <h2>{appName}</h2>
            </div>
        </div>
    )
}

export default Header