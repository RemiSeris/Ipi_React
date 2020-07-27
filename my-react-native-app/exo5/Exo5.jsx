import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

/*

const Exo5 = () => {
    const [isConnect, setIsConnect] = useState(false)
    const changeState = () => {
        setIsConnect(!isConnect)
    }
    return (
        <View >
            <Text>{isConnect ? 'Connected' : 'Disconnected'}</Text>
            <Button title={'Connect / disconnect'} onPress={changeState}></Button>
        </View>
    );
}



*/

const Exo5 = () => {
    const [isConnect, setIsConnect] = useState(false)
    const [isConnectText, setIsConnectText] = useState('disconnected')
    const changeState = () => {
        setIsConnect(!isConnect)
        isConnect ? setIsConnectText('connected') : setIsConnectText('disconnected')
        console.log(isConnect)
    }
    return (
        <View >
            <Text>{isConnectText}</Text>
            <Button title={'Connected?'} onPress={changeState}></Button>
        </View>
    );
}



export default Exo5