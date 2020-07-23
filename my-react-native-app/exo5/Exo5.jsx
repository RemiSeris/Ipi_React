import React from 'react';
import { View, Button, Text } from 'react-native';


const Online = () => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const toggle = setButton(() => { };

    })
}


const Exo5 = () => {

    const { OnOff } = useContext(AppContext)
    return (
        <View >
            <Button title={"connect/disconnect"} onPress={OnOff} />
            <Text />
        </View>
    );
}



export default Exo5
