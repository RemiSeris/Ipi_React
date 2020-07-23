import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MessageCard = ({ from, content }) => {

    return (
        <View>
            <Text>{from}</Text>
            <Text>{content}</Text>
        </View>
    )
}

export default MessageCard