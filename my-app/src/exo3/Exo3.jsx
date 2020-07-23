import React from 'react'
import { TextField } from '@material-ui/core'
import "./exo3.css"

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {
    return (
        <div className={"exo3"}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />

            </form>
        </div>
    )
}

export default Exo3