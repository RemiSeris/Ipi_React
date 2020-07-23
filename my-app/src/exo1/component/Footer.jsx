import React from 'react'

const Footer = ({legalMention}) => {
    return (
        <div className={"legalMention"}>
           <p>{legalMention}</p> 
        </div>
    )
}

export default Footer