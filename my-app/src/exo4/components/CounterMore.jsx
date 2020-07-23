import React, { useContext } from 'react'
import { CounterContext } from '../CounterContextProvider'
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { Button } from '@material-ui/core';

const CounterMore = () => {

    const {inCrementNb} = useContext(CounterContext)


    return (
        <Button onClick={inCrementNb} variant="contained" color="primary" startIcon={<PlusOneIcon />}>Increment</Button>

    )
}


export default CounterMore
