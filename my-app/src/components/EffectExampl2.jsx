import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'


const EffectExampl = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)


    //On trigger un effect au montage (première apparition du composant dans la vue)
    useEffect(() => {
        console.log('effect On start')
    }, [])

    //On trigger un effet lorsque la variable d'état "count" change
    useEffect(() => {
        console.log('effect On count change', count)
    }, [count2])

    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>
                {"Increment Count 1"}
            </Button>
            <Button onClick={() => setCount2(count2 + 1)}>
                {"Increment Count 2"}
            </Button>
        </div>
    )
}


export default EffectExampl