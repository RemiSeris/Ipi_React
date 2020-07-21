import React, { useContext } from 'react'
import { useState } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { AppContext } from '../AppContext'

const Item = ({ title, description, itemState, listState, indexItem,indexList }) => {
    
    const {changeListItem} = useContext(AppContext)
    const [done, toggleDone] = useState(itemState)

    const toogleCheck = () => {
        if (done === true)
            toggleDone(false)
        else
            toggleDone(true)
            changeListItem(indexList, indexItem, !done);
    }

    let itemDoneClassName = itemState === true ? 'item item-done' : 'item'
    return (
        <div className={itemDoneClassName}>
            <FormControl component="fieldset">
                <FormControlLabel value="start" label={title}  control={
                    <Checkbox color="secondary" checked={itemState} onChange={toogleCheck} />
                }/>
            </FormControl>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                
            </div>
 
        </div>
    )
}

export default Item