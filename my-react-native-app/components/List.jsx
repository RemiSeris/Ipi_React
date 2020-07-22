import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {AppContext} from '../AppContextPovider';

const List = ({ list, children }) => {
    const {removeItem, addItem} = useContext(AppContext)
    const {title} = list

    const createNewItem = () => {
        addItem(list)
    }
    const deleteItem = () => {
        removeItem(List)
    }

    return (
        <View style={styles.listContainer}>
            <Text> {title} </Text>
            {children}
            <View style={styles.button}>
            <Button onPress={createNewItem} title="Add Item" />
            </View>
            <View style={styles.button}>
            <Button onPress={deleteItem} title="Delete Item" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        elevation:3,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: "50px",
    },
    button: {
        margin: "5px",
    }

});

export default List