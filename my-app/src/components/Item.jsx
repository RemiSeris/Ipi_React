import React from 'react'
import { useState } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'

const Item = ({ title }) => {
    const [done, toggleDone] = useState(false)

    const toogleCheck = () => {
        if (done === true)
            toggleDone(false)
        else
            toggleDone(true)
    }

    let itemDoneClassName = done === true ? 'item item-done' : 'item'
    return (
        <div className={itemDoneClassName} >
        <FormControl component="fieldset">
           
            <FormControlLabel
                value="start"
                control={
                <Checkbox color="secondary" checked={done} onChange={toogleCheck} />
                }
                label={title}
                labelPlacement="end"

            />
            

        </FormControl>
        
        </div>

    )
}

export default Item