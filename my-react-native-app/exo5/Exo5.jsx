import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Exo5 = () => {
    const [isConnect, setIsConnect] = useState(false)
    const [isConnectText, setIsConnectText] = useState('I\'m connected')
    const onPressChangeState = () => {
        setIsConnect(!isConnect)
        isConnect ? setIsConnectText('I\'m connected') : setIsConnectText('I\'m disconnected')
    }
    return (
        <View >
            <Text>{isConnectText}</Text>
            <Button title={'Connect/Disconnect'} onPress={onPressChangeState}></Button>
        </View>
    );
}

export default Exo5