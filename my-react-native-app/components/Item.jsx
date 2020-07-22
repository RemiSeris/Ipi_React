import React, { useContext } from 'react'
import { useState } from 'react'
import { FormControl, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import { AppContext } from '../AppContextProvider'

import DeleteIcon from '@material-ui/icons/Delete'
import { StyleSheet, Text, View } from 'react-native';



const Item = ({ title, description, itemState, listState, indexItem, indexList }) => {

    const { changeListItem, changeItemIndex, openDeleteItem } = useContext(AppContext)
    const [done, toggleDone] = useState(itemState)

    const toogleCheck = () => {
        if (done === true)
            toggleDone(false)
        else
            toggleDone(true)
        changeListItem(indexList, indexItem, !done);
    }

    const deleteItemEntry = () => {
        changeItemIndex(indexItem)
        console.log(indexItem)
        openDeleteItem()
    }

    let itemDoneClassName = itemState === true ? (styles.item+' '+ styles.itemDone) : styles.item
    return (
        <View style={itemDoneClassName}>
            <FormControl component="fieldset">
                <FormControlLabel value="start" label={title} control={
                    <Checkbox color="secondary" checked={itemState} onChange={toogleCheck} />
                }/>
            </FormControl>
            <View className='item-content' style={styles.itemContent}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
            <Button onClick={deleteItemEntry} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 30+'px auto',
        padding: 5+'px',
        width: 100+'%',
        display: 'flex',
        alignItems: 'center',
    },
    itemDone: {
        backgroundColor: '#acacde',
    },
    itemContent:{
        width: 80+'%',
    }

});
export default Item
