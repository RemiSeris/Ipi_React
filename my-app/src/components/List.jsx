import React from 'react'
import Switch from "@material-ui/core/Switch";


const List = ({ children, title }) => {
    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            <div className={'switchList'}>
                {/*<Switch*/}
                {/*    checked={switchValue}*/}
                {/*    onChange={onSwitchChange}*/}
                {/*    name="checkedSwitch"*/}
                {/*    color="secondary"*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default List
