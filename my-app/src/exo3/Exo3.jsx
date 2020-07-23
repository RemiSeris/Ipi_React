import React from 'react'
import { TextField, Button } from '@material-ui/core'
import "./exo3.css"
import { useState, useEffect } from 'react'

const KEY_LOCAL_STORAGE = 'my_title'

const defaultValue = {
    TextField : ''
}

const Exo3 = () => {
    const [inputValue, setValues] = useState(defaultValue);


    useEffect( () => {
        const textFieldFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if(textFieldFromStorage){

        setValues(textFieldFromStorage)
        }
       
    }, [])


   const SM = () => {
       localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))
   }

   const changeInputValue = event => {
       setValues({TextField: event.target.value})
   };



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