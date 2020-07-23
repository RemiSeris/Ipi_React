import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Button, View } from 'react-native';
=======
import { StyleSheet, Button, View, TextInput, FlatList, Text, TouchableHighlight } from 'react-native';
>>>>>>> eb62be5a8ae3f72c15ab2d59b91599a6f1932124
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import Popup from './components/Popup';
<<<<<<< HEAD

const App = () => {
  const { myLists, removeList } = useContext(AppContext)
  const {open, setOpen} = useState(false)


  const handleClose = () => {
    setOpen(false)
  }
  const openModal = () => {
    setOpen(true)
  }

  return (
    <View>
      <Popup open={open} handleClose={handleClose} />
=======

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

  const openModal = () => {
    setOpen(true)
  }

  const logElementOnClick = (item) => {
    console.log(item)
  }

  const renderItem = ({ item, index }) => {
    return <TouchableHighlight onPress={() => logElementOnClick(item)}><Text>{item}</Text></TouchableHighlight>
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
>>>>>>> eb62be5a8ae3f72c15ab2d59b91599a6f1932124
      {
        myLists.map((list) => <List key={list.tile} list={list}>
          {list.items.map((item) => <Item key={item.titile} title={item.title} />)}
        </List>
        )}

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
  }
});

export default App
