import React from 'react'
import {Dialog, DialogTitle} from '@material-ui/core';

const Popup = ({open})=>{
    const handleClose = () => {
        console.log('handleClose')
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