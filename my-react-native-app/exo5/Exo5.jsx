import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Exo5 = () => {

    const [isConnected, setIsConnected] = useState(false);
    
    const switchTheButton = () => {
        if(isConnected === true) {
            setIsConnected(false)
        } else {
            setIsConnected(true)
        }
    }

    const WhatAmI = isConnected ? 'isConnected' : "I'm disconnected";

    return (
        <View >
<Button
  onPress={switchTheButton}
  title="connect/disconnect'"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    <Text>{WhatAmI}</Text>
        </View>
    );
}



export default Exo5
