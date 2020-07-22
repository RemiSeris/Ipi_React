import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from './AppContextPovider';
import Item from './components/Item';
import List from './components/List';
const App = () => {
  const { myLists } = useContext(AppContext)

  return (
    <View style={styles.container}>
      {myLists.map((list) => {
        return (<View>
          <Text>{list.title}</Text>
          <List list={list}>
            {list.Item.map(({title: itemTitle}) => <Item title={itemTitle}></Item>)}
          </List>        
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
