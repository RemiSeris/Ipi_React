import React, { useContext } from 'react'

const Content = ({content}) => {

    return (
        <div>
            <div className={"Content"}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Content