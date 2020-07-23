import React from 'react'
import { View, StyleSheet } from 'react-native'

const CheckBox = ({ checked }) => {
    let myStyle = styles.checkbox
    if (checked === true)
        myStyle = styles.checkboxChecked

    return <View style={myStyle} />
}



const styles = StyleSheet.create({
    checkbox: {
        width: 10,
        height: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'blue',
        borderRadius: 10
    },
    checkboxChecked: {
        borderRadius: 10,
        width: 10,
        height: 10,
        backgroundColor: 'blue'
    }

});

export default CheckBox