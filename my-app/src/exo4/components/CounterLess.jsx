import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { CounterContext } from '../CounterContextProvider'

const CounterLess = () => {
    const { nb, setNb } = useContext(CounterContext)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setNb(nb - 1)}>
                {"Counter 1 :" + nb.toString()}
            </Button>
        </div>
    )
}


export default CounterLess