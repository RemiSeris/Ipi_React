import React, { Children } from 'react';
import { StyleSheet,View, Text } from 'react-native';


const Item = ({ title }) => {
    return (
        <View style={styles.container}>
           <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Item