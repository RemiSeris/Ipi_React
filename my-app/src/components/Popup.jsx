import React, { useState } from 'react'
import { Dialog, DialogTitle, TextField, Button } from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider';


const Popup = () => {

const Popup = () => {
    const { open, setOpen, addList } = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        addList(inputValue)
        setInputValue('')
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"New List"}</DialogTitle>
            <div className="dialogContent">
                <TextField className="input" value={inputValue} onChange={handleChange} label='name' />
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    {"SUBMIT"}
                </Button>
            </div>
        </Dialog>
    )
}

export default Popup