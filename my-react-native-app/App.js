import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from './AppContextPovider';

const App = () => {
  const { myLists } = useContext(AppContext)

  return (
    <View style={styles.container}>
      {myLists.map((list) => {
        return <Text>{list.title}</Text>
      })}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
