import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput, FlatList, Text, TouchableHighlight, CheckBox } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';

const Data = [
  {
    title: 'first'
  },
  {
    title: 'second'

  },
  {
    title: 'third'

  }
]

const App = () => {
  const { myLists, removeList, setOpen } = useContext(AppContext)
  const { checked, setCheck } = useContext(AppContext)

  const openModal = () => {
    setOpen(true)
  }

  const logElementOnClick = (item) => {
    console.log(item)
  }

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <CheckBox style={styles.checkbutton} item={Item} checked={checked} onPress={setCheck(checked)}/>
        <TouchableHighlight onPress={() => logElementOnClick(item.title)}><Text>{item.title}</Text></TouchableHighlight>
      </View>
    )
  }

  const extractKey = (item, index) => {
    return item;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={myLists}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
      <Button title={"Add List"} onPress={openModal} />
      <Button onPress={removeList} title={"Delete List"} />
      <Button title={"Open Modal"} onPress={openModal} />
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
  },
  checkbutton: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'blue'
}
});

export default App
