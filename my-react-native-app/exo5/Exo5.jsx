import React, { useState } from 'react';
import { View, Button } from 'react-native';


const Exo5 = () => {


    const [isConnected, setIsConnected] = useState(false)

    const isConnect = (isConnected) => {
        if (is isConnected === false)
        isConnected = true
    else isConnected = false
}



return (
    <View >
        <Button title={"Connection"} onPress={isConnect} >

        </Button>

    </View>
);
}



export default Exo5
