import React from 'react'
import { TextField } from '@material-ui/core'
import "./exo3.css"

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {
    const Text = [
        text,
        setText
    ]

    const saveText = () => {
        localStorage.setItem(my_title, JSON.stringify(myLists)
    }
    return (
        <div className={"exo3"}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />

            </form>
        </div>
    )
}

export default Exo3