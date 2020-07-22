import React from 'react';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';


const Popup = () => {
    const { open, setOpen, addList } = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        addList(inputValue)
        setInputValue('')
        setOpen(false)
    }

    const [value, onChangeText] = React.useState('');

    return (
        <Modal>
            <View style={styles.dialogContent}>
                <Text>NewList</Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value} />
                <Button onPress={handleSubmit} title="SUBMIT" />
            </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    dialogContent: {
        elevation: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: "50",
    },
    button: {
        margin: "5",
    }
});

export default Popup