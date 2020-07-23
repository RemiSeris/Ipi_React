import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Exo5 from './exo5/Exo5'
// import Exo6 from './exo6/EXo6'

const App = () => {
=======
import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput, FlatList, Text, TouchableHighlight } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';


const App = () => {
  const { myLists, removeList, setOpen } = useContext(AppContext)

  const openModal = () => {
    setOpen(true)
  }


  const renderList = ({ item }) => {
    return <List list={item}>
      {
        item.items.map((itemObj) => <Item key={itemObj.title} item={itemObj} />)
      }
    </List>
  }

  const extractKeyFromList = (item) => {
    return item.title
  }
>>>>>>> ac3b2b88ca3e63f270c5703b1f95ce25bb73f98d


  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {
        /*
         <Exo5/>
         <Exo6/>
        */
      }
=======

      <Popup />
      <FlatList
        data={myLists}
        renderItem={renderList}
        keyExtractor={extractKeyFromList}
      />

      <Button title={"Add List"} onPress={openModal} />
      <Button onPress={removeList} title={"Delete List"} />

>>>>>>> ac3b2b88ca3e63f270c5703b1f95ce25bb73f98d
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
=======
    backgroundColor: 'white',
>>>>>>> ac3b2b88ca3e63f270c5703b1f95ce25bb73f98d
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App
