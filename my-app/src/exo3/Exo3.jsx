import React from 'react'
import { TextField, Button } from '@material-ui/core'
import "./exo3.css"
import { useState } from 'react'

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {
    const [inputValue, setValues] = useState({
        TextField : ''
    });

   const saveMe = () => {
       localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))
   }

   const changeInputValue = event => {
       setValues({TextField: event.target.value})
   }


    return (
        <div className={"exo3"}>
            <div className="saveMe">
            <form   autoComplete="off">
             <TextField onChange={changeInputValue} id="standard-basic" label="Standard" />
            </form>
            <Button onClick={saveMe} variant="contained" color="primary">Save</Button>
            </div>
        </div>
    )
}

export default Exo3