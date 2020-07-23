import React, { useContext, useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import { AppContext } from '../AppContextProvider';


const Popup = () => {
    const { open, setOpen, addList } = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')


    const onChangeText = (text) => {
        setInputValue(text)
    }

    const onModalClose = () => {
        setInputValue('')
    }

    const submit = () => {
        addList(inputValue)
        setOpen(false)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <Modal
            animationType="slide"
            visible={open}
            onRequestClose={onModalClose}
        >
            <View>
                <Text>{"New List"}</Text>
                <TextInput value={inputValue} onChangeText={onChangeText} />
                <Button title={"Submit"} onPress={submit} />
                <Button title={"Close Modal"} onPress={closeModal} />
            </View>
        </Modal>
    )
}

export default Popup