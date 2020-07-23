import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'

const CounterMore  = () => {

    const {inCrementNb} = useContext(CounterContext)


    return (
        <Button onClick={inCrementNb}>Increment</Button>

    )
}

export default CounterMore