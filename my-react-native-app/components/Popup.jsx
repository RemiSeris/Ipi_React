import React from 'react';
import { Modal, View, Text } from 'react-native';


const Popup = ({ open, handleClose }) => {
    console.log('open', open)
    return (
        <Modal
            animationType="slide"
            visible={open}
            onRequestClose={handleClose}
        >
            <View>
                <Text>{"my modal"}</Text>
            </View>
        </Modal>
    )
}

export default Popup