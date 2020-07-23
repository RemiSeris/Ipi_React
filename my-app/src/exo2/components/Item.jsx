import React from 'react'
import "../exo2.css";


const Item = ({title}) => {

    return (
        <div className="item">
            {title}
        </div>
    )
}

export default Item