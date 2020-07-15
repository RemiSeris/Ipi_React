import React from 'react'

const Button = ({ title, onClick, classN }) => {
    return (
        <button onClick={onClick} className={classN}>
            {title}
        </button>
    )
}

export default Button