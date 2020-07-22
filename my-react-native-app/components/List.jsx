import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../AppContextPovider';


const List = ({ list, children }) => {
    const {removeItem, addItem} = useContext(AppContext)
    const {title} = list;


    const createNewItem = () => {
        addItem(list)
    }

    const deleteItem = () => {
        removeItem(list)
    }


    return (
        <View>
           <Text>{title}</Text>
           {children}
           <Button style={styles.Button} onPress={createNewItem} title='Add Item'></Button>
           <Button style={styles.Button} onPress={deleteItem} title='Delete Item'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'white',
        elevation: 3,
    },
    button : {
        color: "yellow"
    }
})

export default List