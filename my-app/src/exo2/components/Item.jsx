import React, { useState } from 'react'

const Item = ({title}) => {

    const [classCss, setClassCss] = useState(true); 

    const toItemClassCss = () =>{
        setClassCss(false); 
    }

    return (
        <div onClick={toItemClassCss} className={classCss ? "item" : "itemActive"}>
            <h5 className="itemTitle">{title}</h5>
        </div>
    )
}

export default Item;