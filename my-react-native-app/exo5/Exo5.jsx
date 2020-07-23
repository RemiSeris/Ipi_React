import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Exo5 = () => {
    const [isConnect, setIsConnect] = useState(false)
    const [isConnectText, setIsConnectText] = useState('Je suis connecté')
    const onPressChangeState = () => {
        setIsConnect(!isConnect)
        isConnect? setIsConnectText('Je suis connecté') : setIsConnectText('Je suis déconnecté')
    }
    return (
        <View >
            <Text>{isConnectText}</Text>
            <Button title={'Connexion / Déconnexion'} onPress={onPressChangeState}></Button>
        </View>
    );
}



export default Exo5
