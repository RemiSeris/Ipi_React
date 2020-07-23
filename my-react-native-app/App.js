import { StatusBar } from 'expo-status-bar';
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


  return (
    <View style={styles.container}>

      <Popup />
      <FlatList
        data={myLists}
        renderItem={renderList}
        keyExtractor={extractKeyFromList}
      />

      <Button title={"Add List"} onPress={openModal} />
      <Button onPress={removeList} title={"Delete List"} />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white'
  }
});

export default App
