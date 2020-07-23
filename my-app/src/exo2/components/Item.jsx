import React from 'react'
import List from './List'

const Item = ({ children, title }) => {

    return (
        <div classname={'list'}>
            {title}
        </div>
    )
}


export default Item