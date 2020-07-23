import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const MessageCard = ({from, content}) => {

    return (
<View style={styles.container}>
    <Text style={styles.from}>{from}</Text>
    <Text style={styles.content}>{content}</Text>
</View>
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
    from:{
        color: '#FFFCF2',
        fontSize: 30,
        fontWeight: '700'

    },
    content:{
        color: '#FFFCF2',
    }
});
export default MessageCard