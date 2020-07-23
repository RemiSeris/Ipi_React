import React, { useContext } from 'react'
import { useState } from 'react'
import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core'
import { AppContext } from '../AppContextProvider'

import DeleteIcon from '@material-ui/icons/Delete'
import { StyleSheet, Text, View , Button} from 'react-native';



const Item = ({ title, description, itemState, listState, indexItem, indexList }) => {

    const { changeListItem, changeItemIndex, openDeleteItem } = useContext(AppContext)
    const [done, toggleDone] = useState(itemState)
/*     let itemDoneClassName = itemState === true ? (styles.item + ' ' + styles.itemDone) : styles.item
 */    const toogleCheck = () => {
        if (done === true)
            toggleDone(false)
        else
            toggleDone(true)

        changeListItem(indexList, indexItem, !done)
    }

    const deleteItemEntry = () => {
        changeItemIndex(indexItem)
        console.log(indexItem)
        openDeleteItem()
    }

    return (
        <View style={[styles.item, itemState === true ? styles.itemDone : styles.item]}>
{/*             <FormControl component="fieldset">
                <FormControlLabel value="start"  control={
                    <Checkbox color="secondary" checked={itemState} onChange={toogleCheck} />
                } />
            </FormControl> */}
            <View style={styles.itemContent}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
            <Button onPress={deleteItemEntry} title="Delete" >Delete</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 30 + 'px auto',
        padding: 5 + 'px',
        width: 100 + '%',
        display: 'flex',
        alignItems: 'center',
        display: 'flex',
        margin: 20+'px'
    },
    itemDone: {
        margin: 30 + 'px auto',
        padding: 5 + 'px',
        width: 100 + '%',
        display: 'flex',
        alignItems: 'center',
        display: 'flex',
        minHeight: 150+'px',
        margin: 20+'px',
        backgroundColor: '#acacde',
    },
    itemContent: {
        width: 55 + '%'
    }

});
export default Item
