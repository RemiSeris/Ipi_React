import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'


const Counter = () => {

    const {nb} = useContext(CounterContext)


    return (
        <div className='nb'>
            {nb}
        </div>
    )
}


export default Counter