import React, { useContext } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const MessageCard = ({ from, content, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Text style={styles.from}>{from}</Text>
            <Text style={styles.content}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#252422",
        padding: 20,
        borderRadius: 30,
        borderTopLeftRadius: 0,
        margin: 10
    },
    from: {
        color: '#FFFCF2',
        fontSize: 30,
        fontWeight: '700'

    },
    content: {
        color: '#FFFCF2',
    }
});
export default MessageCard