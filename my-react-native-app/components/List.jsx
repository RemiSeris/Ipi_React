import React from 'react';
import { useContext } from 'react';
import { View, Tex, Button, Text } from 'react-native';
import { AppContext } from '../AppContextProvider'

const List = ({ list, children }) => {
    const { addItem, removeItem } = useContext(AppContext)
    const { title } = list

    const createNewItem = () => {
        addItem(list)
    }

    const deleteItem = () => {
        removeItem(list)
    }

    return (
        <View style={styles.list}>
            <View style={styles.listTitle}>
                {title}
            </View>
            <View style={styles.listItems}>
                {children}
            </View>
            <Button title="Add Item", onPress={() => Alert.createNewItem('')} />

            <Button title="Delete Item" />
        </View>
    )
}

export default List