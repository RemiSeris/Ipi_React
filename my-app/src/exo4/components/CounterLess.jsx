import React, {useContext} from 'react'
import {CounterContext} from '../CounterContextProvider'
import {Button} from '@material-ui/core';


const CounterLess = () => {

    const {decrementNombre} = useContext(CounterContext)


    return (
        <Button onClick={decrementNombre} variant="outlined" color="secondary">Decrement</Button>

    )
};


export default CounterLess
