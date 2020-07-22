import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { useState } from 'react';


const Popup = () => {

    const {open, setOpen, addList} = useContext(AppContext)
    const [inputValue, setInputValue] = useState('');
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) =>  {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        addList(inputValue)
        setInputValue
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                {"Dialog Title"}

            </DialogTitle>
            <div>
                {"Content"}

            </div>
        </Dialog>
    )
}

export default Popup