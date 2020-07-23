import React, {useContext} from 'react'
import {CounterContext} from '../CounterContextProvider'
import {Button} from '@material-ui/core';

const CounterMore = () => {

    const {inCrementNombre} = useContext(CounterContext);


    return (
        <Button onClick={inCrementNombre} variant="outlined" color="primary">Increment</Button>

    )
}


export default CounterMore
