import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput, FlatList, Text, TouchableHighlight } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';

const Data =  myLists.map((list) => {key={list.tile} list={list},item=

const App = () => {
  const { myLists, removeList, setOpen } = useContext(AppContext)

  const openModal = () => {
    setOpen(true)
  }

  const logElementOnClick = (item) => {
    console.log(item)
  }

  const renderItem = ({ item, index }) => {
    return <TouchableHighlight
      onPress={() => logElementOnClick(item)}>
      <Text>{item.title}</Text>
      </TouchableHighlight>
  }

  const extractKey = (item, index) => {
    return item
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />

      <Popup />
   

      <Button title={"Add List"} onPress={openModal} />
      <Button onPress={removeList} title={"Delete List"} />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white'
  }
});

export default App
