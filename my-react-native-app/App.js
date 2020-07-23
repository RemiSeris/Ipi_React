import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';

const App = () => {
  const { myLists, removeList, setOpen } = useContext(AppContext)

  const openModal = () => {
    setOpen(true)
  }

  return (
    <View style={styles.container}>
      <Popup />
      {
        myLists.map((list) => <List list={list}>
          {list.items.map((item) => <Item title={item.title} />)}
        </List>
        )}

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
