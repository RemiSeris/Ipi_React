import React from 'react'
import Switch from './Switch'


const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
                <Switch></Switch>
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            
        </div>
    )
}

export default List