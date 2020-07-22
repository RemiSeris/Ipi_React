import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';
import { ScrollView } from 'react-native-gesture-handler';
import Popup from './components/Popup';

const App = () => {
  const { myLists, removeList, setOpen } = useContext(AppContext)

  const openPopup = () =>{
    setOpen(true)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Popup/>
        {
          myLists.map((list) => <List list={list}>
            {list.items.map((item) => <Item title={item.title} />)}
          </List>
          )}
        <Button onPress={openPopup} title={"Add List"} />
        <Button onPress={removeList} title={"Delete List"} />

        <StatusBar style="auto" />
      </ScrollView>
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
});

export default App
