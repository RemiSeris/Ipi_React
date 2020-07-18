import React from 'react'
import Switch from './Switch'

const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
                
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            <Switch />
        </div>
    )
}

export default List