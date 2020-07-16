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
        <div className={itemDoneClassName}>
            <FormControl component="fieldset">
                <FormControlLabel value="start" label={title} labelPlacement="" control={
                    <Checkbox color="secondary" checked={done} onChange={toogleCheck} />
                }/>
            </FormControl>
        </div>
    )
}

export default Item