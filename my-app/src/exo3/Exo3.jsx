import React, { useEffect, useState } from 'react'
import "./exo3.css"
import { TextField, Button, InputAdornment } from '@material-ui/core'

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {

    const [inputValue, changeInput] = useState('')
    const changeInputOnChange = (event) => { changeInput(event.target.value) }
    const saveInput = () =>{ localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue)) }

    useEffect(() => {
        let loadedInput = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (loadedInput !== undefined) 
        {
            if (loadedInput !== null) {
                changeInput(loadedInput)
            }
        }
    }, [])

    return (
        <div className={"exo3"}>
            <TextField value={inputValue} onChange={changeInputOnChange} id="input" label="TextField" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" />
                    ),
                }}/>
                <div className='button'>
                <Button onClick={saveInput} variant="contained" color="primary" >Save</Button>
                </div>
        </div>
    )
}
export default Exo3