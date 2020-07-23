import React from 'react'
import "../exo2.css";


const Item = ({itemTitle}) => {

    return (
        <div className="item">
            {itemTitle}
        </div>
    )
}

export default Item