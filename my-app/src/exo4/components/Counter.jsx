import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'

const Counter = () => {
    const { nb} = useContext(CounterContext)

    return (
        <div>
            {nb}
        </div>
    )
}


export default Counter