import React, { useContext } from 'react'
import { Children } from 'react'

const Footer = ({legalMention}) => {

    return (
        <div>
            <div className={"Footer"}>
                <h1>{legalMention}</h1>
            </div>
        </div>
    )
}

export default Footer