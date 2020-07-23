<<<<<<< HEAD
import React from 'react';
import { View, Modal, Text } from 'react-native';



const Popup = ({open}) => {

    console.log(open)
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View>
            <Text>Modale ouverte</Text>
        </View>
      </Modal>
=======
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
>>>>>>> eb62be5a8ae3f72c15ab2d59b91599a6f1932124
    )
}

export default Popup