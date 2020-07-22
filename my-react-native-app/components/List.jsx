import React from 'react';
import { View, Text } from 'react-native';

const List = ({ list, children }) => {
    return (
        <View>
            <Text>{list.title}</Text>
            {children}
        </View>
    )
}

export default List