import React from 'react'



const List = ({ children, title }) => {



    return (
        <div className={'list'} >

            <div className={'listTitle'}>
                {title}
                {children}
            </div>

        </div>
    )
}

export default List