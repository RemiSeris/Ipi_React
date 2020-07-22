import React from 'react';
import { View } from 'react-native';


const List = ({ list, children }) => {
    return (
        <View>
            <Text>{list}</Text>
        </View>
    )
}

export default List