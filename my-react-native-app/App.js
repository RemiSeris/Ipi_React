import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppContext } from './AppContextPovider';
import Item from './components/Item';
import List from './components/List';



const App = () => {
  const { myLists, removeList } = useContext(AppContext)

  return (
    <View style={styles.container}>
      {
        myLists.map((list) => <List list={list}>
          {list.items.map((item) => <Item title={item.title} />)}
        </List>
        )}
      <Button title={"Add List"} />
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
});

export default App
