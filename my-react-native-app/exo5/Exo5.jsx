import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Exo5 = () => {

    const [isConnected, setIsConnected] = useState(false)

    const setConnection = () => {
        setIsConnected(!isConnected)
    }

    return (
        <View style={styles.listContainer}>
            <Text> {title}</Text>
            <View style={styles.button}>
                <Button onPress={setConnection} title="connect/disconnect" />
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        listContainer: {
            elevation: 3,
            backgroundColor: 'white',
            alignItems: 'center',
            margin: "50px",
        }
    }
    )
}



export default Exo5
