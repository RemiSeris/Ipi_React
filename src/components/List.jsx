import React from 'react';
import Switch from '../components/Item';

const List = ({children,title}) => 
        <div className={'list'}>
            <div className="listTitle">
                {title}
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            <div>
                <Switch/>
            </div>
        </div>

export default List;