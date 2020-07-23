import React, {useEffect, useState} from 'react'
import {Button, InputAdornment, TextField} from '@material-ui/core'
import "./exo3.css"

const KEY_LOCAL_STORAGE = 'my_title';

const Exo3 = () => {
    const [inputValue, changeInput] = useState('');
    const inputOnChange = (event) => {
        changeInput(event.target.value)
    };
    const save = () => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))

    };
    useEffect(() => {
        let loadedInput = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
        if (loadedInput) {
            changeInput(loadedInput)
        }
    }, []);
    return (
        <div className={"exo3"}>

            <TextField value={inputValue} onChange={inputOnChange} id="input" label="TextField" InputProps={{
                startAdornment: (
                    <InputAdornment position="start"/>
                ),
            }}/>
            <div className='btn-submit'>
                <Button onClick={save} variant="outlined" color="primary">Save</Button>
            </div>
        </div>
    )
};

export default Exo3
