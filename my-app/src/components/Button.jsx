<<<<<<< HEAD
import React from 'react';

const Button = (onClick, title) => {
    return(
        <div><button onClick={onClick}>{title}</button></div>
    )
}

export default Button;
=======
import React from 'react'


const Button = ({ onClick, title }) =>
    <button onClick={onClick}>
        {title}
    </button>


export default Button
>>>>>>> 7f9cf2a7268cd42ec1609f2b810e6fed6904dcb5
