import React from 'react'
import {Card} from 'react-bootstrap';


const Header = ({appName}) => {
 
    return (
        <div>
           
    <h2 className="title">{appName}</h2>
            
        </div>
    )
}

export default Header;