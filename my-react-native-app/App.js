import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { AppContext } from './AppContextProvider';
import Item from './components/Item'
import List from './components/List'

const App = () => {
  const { myLists } = useContext(AppContext)

  /* return (
    <View style={styles.container}>
      {myLists.map((list) => {
        return <Text>{list.title}</Text>
      })}
      <StatusBar style="auto" />
    </View>
  );
} */


  return (
    <View style={styles.container}>
      {myLists.map((list) => {
        return (
          <View><Text>{list.title}</Text>
            <List list={list} >
              {list.items.map(({ title: itemTitle }) => <Item title={itemTitle} />)}

            </List>

          </View>
        );
      })}

      <Button title={'ADD'} >  </Button>
      <Button title={"DELETE "}>  </Button>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
