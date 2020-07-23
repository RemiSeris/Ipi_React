import React, { useEffect } from 'react'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import "./exo3.css"
import { useState } from 'react'
import Save from '@material-ui/icons/Save';

const KEY_LOCAL_STORAGE = 'myTitle'

const Exo3 = () => {
    const [inputValue, changeInput] = useState('')

    const changeInputOnChange = (event) => {
        changeInput(event.target.value)
    }

    const saveInput = () =>{
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))
        alert("Objet rajouté au local storage");
    }

    useEffect(() => {
        let loadedInput = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (loadedInput !== undefined && loadedInput !== null) {
            changeInput(loadedInput)
        }
    }, [])

    return (
        <div className={"exo3"}>

            <TextField value={inputValue} onChange={changeInputOnChange} id="txt_input" label="TextField" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Edit />
                        </InputAdornment>
                    ),
                }}/>
                <div className='btn-submit'>
                <Button onClick={saveInput} variant="contained" size="lg" active startIcon={<Save/>}>Save</Button>
                </div>            
        </div>
    )
}

export default Exo3