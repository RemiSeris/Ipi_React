import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import CheckBox from './CheckBox';
import { AppContext } from '../AppContextProvider';


const Item = ({ item }) => {
    const { toogleCheck } = useContext(AppContext)
    const { title, checked } = item

    const onItemPress = () => {
        toogleCheck(item)
    }

    return (
        <TouchableHighlight onPress={onItemPress}>
            <View style={styles.item}>
                <Text>{title}</Text>
                <CheckBox checked={checked} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});


export default Item