import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Exo5 from './exo5/Exo5'
// import Exo6 from './exo6/EXo6'

const App = () => {

  return (
    <View style={styles.container}>
      {
        <Exo5/>
        /*
         <Exo6/>
        */
      }
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App