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
    )
}

export default Popup