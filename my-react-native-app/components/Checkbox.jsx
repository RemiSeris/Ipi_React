import React from 'react';
import { CheckBox, View } from 'react-native';


const CheckBox = ({ CheckBoxtitle }) => {

    return (
        <View>
            <CheckBox style={styles.checkbox}></CheckBox>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: 'blue',
        border: 3,
        cornerRadius: 50,

    }
});

export default CheckBox