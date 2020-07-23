import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MessageCard from './component/MessageCard';

const messageList = [
    {
        from: 'Pierre',
        content: 'Salut, ça va ?'
    },
    {
        from: 'François',
        content: 'ça va et toi ?'
    },
    {
        from: 'Pierre',
        content: 'Trés bien'
    },
    {
        from: 'François',
        content: 'Ok, tu viens toujours à la pêche avec Martine?'
    },
]

const Exo6 = () => {
    const renderItem = ({ item }) => (
        <MessageCard from={item.from} content={item.content} />
      );
    
      return (
        <SafeAreaView >
          <FlatList
            data={messageList}
            renderItem={renderItem}
            keyExtractor={item => item.from}
          />
        </SafeAreaView>
      );
}



export default Exo6
