import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { CounterContext } from '../CounterContextProvider'



const Counter2 = () => {
    const { count, setCount } = useContext(CounterContext)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                {"Counter 2 :" + count.toString()}
            </Button>
        </div>
    )
}


export default Counter2