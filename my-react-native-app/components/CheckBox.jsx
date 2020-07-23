import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../AppContextProvider';
import { color } from 'react-native-reanimated';


const CheckBox = ({ list, children, checked }) => {
    //const { removeItem, addItem } = useContext(AppContext)
    const { checked } = checked


    return (
        <View >
            <CheckBox title={item.title} checked={true}></CheckBox>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        elevation: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 50,
    },
    button: {
        margin: 5,
    }
});

export default CheckBox