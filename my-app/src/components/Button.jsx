import React from 'react'


const Button = ({ onClick, title }) =>
    <button onClick={onClick} className={'button'}>
        {title}
    </button>


export default Button