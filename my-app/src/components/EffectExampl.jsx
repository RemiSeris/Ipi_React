import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'


const EffectExampl = () => {
    const [count, setCount] = useState(0)
    const test = 'toto'

    //On trigger un effet lorsque la variable d'état "count" change
    useEffect(() => {
        console.log('effect On count change')
    }, [test])

    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>
                {"Increment Count " + count.toString()}
            </Button>
        </div>
    )
}


export default EffectExampl