import React from 'react'
import { TextField, Button } from '@material-ui/core'
import "./exo3.css"
import { useState } from 'react'

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {
    const [inputValue] = useState('');



    return (
        <div className={"exo3"}>
            <div className="saveMe">
            <form   autoComplete="off">
             <TextField id="standard-basic" label="Standard" />
            </form>
            <Button variant="contained" color="primary">Save</Button>
            </div>
        </div>
    )
}

export default Exo3