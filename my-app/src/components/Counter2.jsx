import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { AppContext } from '../AppContextProvider'



const Counter2 = () => {
    const { count, setCount } = useContext(AppContext)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                {"Counter 2 :" + count.toString()}
            </Button>
        </div>
    )
}


export default Counter2