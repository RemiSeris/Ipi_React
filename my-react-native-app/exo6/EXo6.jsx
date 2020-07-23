import React, { useState } from 'react';
import { View, SafeAreaView, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MessageCard from './component/MessageCard';

const messageList = [
    {
        from: 'Pierre',
        content: 'Salut, ça va ?'
    },
    {
        from: 'François',
        content: 'ça va et toi ?'
    },
    {
        from: 'Pierre',
        content: 'Trés bien'
    },
    {
        from: 'François',
        content: 'Ok, tu viens toujours à la pêche avec Martine?'
    },
]

const Exo6 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const renderItem = ({ item }) => (
        <MessageCard from={item.from} content={item.content} onPress={() => onPressCard(item.content)} />
    );
    const onPressCard = (content) => {
        console.log('press')
        setModalContent(content)
        setModalVisible(true)
    }
    const onPressClose = () => {
        setModalVisible(false)
    }
    return (
        <View>
            <SafeAreaView >
                <FlatList
                    data={messageList}
                    renderItem={renderItem}
                    keyExtractor={item => item.content}
                />
            </SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalContent}</Text>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={onPressClose}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
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
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default Exo6
