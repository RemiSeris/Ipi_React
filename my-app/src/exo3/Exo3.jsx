import React, { useEffect } from 'react'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import "./exo3.css"
import { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {
    const [inputValue, changeInp] = useState('')
    const changeOnChange = (event) => {
        changeInp(event.target.value)
    }
    const saveInp = () =>{
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))
        console.log(inputValue)

    }
    useEffect(() => {
        let loadedInput = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (loadedInput !== undefined && loadedInput !== null) {
            changeInp(loadedInput)
        }
    }, [])
    return (
        <div className={"exo3"}>

            <TextField value={inputValue} onChange={changeOnChange} id="input" label="TextField" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EditIcon />
                        </InputAdornment>
                    ),
                }}/>
                <div className='btn-submit'>
                <Button onClick={saveInp} variant="contained" color="primary" startIcon={<SaveIcon />}>Save</Button>
                </div>            
        </div>
    )
}

export default Exo3