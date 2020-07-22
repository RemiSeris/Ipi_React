import React from 'react';
import { View } from 'react-native';


const List = ({ list, children }) => {
    return (
        <View>
            {children}
        </View>
    )
}

export default List