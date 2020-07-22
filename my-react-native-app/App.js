import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppContext } from './AppContextProvider';
import List from './components/List';
import Item from './components/Item';

const App = () => {
  const { myLists, addList, removeList } = useContext(AppContext)


  return (
    <View style={styles.container}>
      {myLists.map((list) => {
        return (<View>
        <List list={list}>
          {list.items.map(({ title: itemTitle }) => <Item title={itemTitle} />)}</List>
          <Button onPress={addList} title="ADD"/>
          <Button onPress={removeList} title="DELETE"/>
        </View>)
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
