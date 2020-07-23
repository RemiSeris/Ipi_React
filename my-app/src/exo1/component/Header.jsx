import React from 'react'
import "../exo1.css";


const Header = ({appName}) => {

    return (
        <div className={"firstTitle"}>
            {appName}
        </div>
    )
}

export default Header