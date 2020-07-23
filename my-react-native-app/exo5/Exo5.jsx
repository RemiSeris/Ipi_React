import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Exo5 = () => {
    const [isConnect, setIsConnect] = useState(false);
    const changeState = () => {
        setIsConnect(!isConnect);
    };
    return (
        <View >
            <Text>{isConnect ? 'Connected':'Disconnected'}</Text>
            <Button title={isConnect ? 'Connected':'Disconnected'} type="outline" onPress={changeState}/>
        </View>
    );
};



export default Exo5
