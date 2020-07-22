import React, { useState, useContext } from 'react';
import {  Modal, StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { AppContext } from '../AppContextProvider';


const Popup = () => {

    const { open, setOpen, addList } = useContext(AppContext)
    const [inputValue, setInputValue] = useState('New Title')

    const handleClose = () => {
        setOpen(false)
    }


    const handleSubmit = () => {
        addList(inputValue)
        setInputValue('New List')
        setOpen(false)
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={handleClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>New List</Text>

                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => setInputValue(text)}
                            value={inputValue}
                            placeholder='Name'
                        />

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.textStyle}>Submit</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Popup