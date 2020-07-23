import React, {useContext} from 'react'
import {CounterContext} from '../CounterContextProvider'


const Counter = () => {

    const {nombre} = useContext(CounterContext);


    return (
        <div className='nombre'>
            {nombre}
        </div>
    )
};


export default Counter
