import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import { Button } from '@material-ui/core';


const CounterLess = () => {

    const {decrementNb} = useContext(CounterContext)


    return (
        <Button onClick={decrementNb} variant="outlined" startIcon={<ExposureNeg1Icon />}>Decrement</Button>

    )
}


export default CounterLess