import React from 'react'
import { Button } from '@material-ui/core';


const Button = ({ onClick, title }) =>
    <button onClick={onClick}>
        {title}
    </button>


export default Button
