import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'

const CounterLess = () => {

    const {decrementNb} = useContext(CounterContext)


    return (
        <Button onClick={decrementNb}>Decrement</Button>

    )
}

export default CounterLess