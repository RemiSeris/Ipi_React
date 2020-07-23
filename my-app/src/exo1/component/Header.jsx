import React from 'react'

const Header = ({ appName }) => {
    return (
        <div className={'header'}>
            {appName}
        </div>
    )
}

export default Header