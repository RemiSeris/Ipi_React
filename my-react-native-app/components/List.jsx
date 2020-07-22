import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../AppContextProvider'



const List = ({ children, title, state, index }) => {
    //import du service AppContext
    const {changeList, openAddItem} = useContext(AppContext)

    const [checked, setChecked] = useState(state)
    //Observe les changements sur la checkbox
    const toggleCheck = () => {
        if (checked)
            setChecked(false)
        else
            setChecked(true)
            changeList(index, !checked);
    }

    return (
        <View style={styles.list}>
            <View className="list-title" style={styles.listTitle}>
                {state === true
                    ? <CheckIcon color="primary" />
                    : <ClearIcon color="secondary" />
                }
               <Text>{title}</Text> 
                <Switch color="primary" checked={state} onChange={toggleCheck}></Switch>
            </View>
            <View  style={styles.listItems}>
            <View style={styles.item + styles.itemAdd}>
                    <Button variant="outlined" color="secondary"  onClick={openAddItem} startIcon={<EditIcon />} >
                        Add Item
                    </Button>
                </View>
                {children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        margin: 'auto',
        padding: 5+'px',
        width: 100+'%',
        display: 'flex',
        alignItems: 'center',
    },
    itemDone: {
        backgroundColor: '#acacde',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20+'px',
        width: 'max-content',
        width: 40+'%',
        minWidth: 350 + 'px'
    },
    listTitle: {
        padding: 15+'px',
        bordeRadius: 5+'px',
        width: 100+'%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItems: {
        width: 90+'%',
    },
    itemAdd: {
        justifyContent: 'center',
    },


});
export default List