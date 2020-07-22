import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AppContext } from '../AppContextPovider';



const List = ({ list, children }) => {
    const { removeItem, addItem } = useContext(AppContext)
    const { title } = list
    const newAddItem = () => {
        addItem(list)
    }

    const newRemoveItem = (list) => {
        removeItem(list)
    }
    return (
        <View>
            <Text>{list.title}</Text>
            {children}
            <Button onPress={newAddItem} title="add Item"> </Button>
            <Button onPress={newRemoveItem} title="add Item"> </Button>
        </View>
    )
}

export default List