import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from './AppContextProvider';
/* import Button from '@material-ui/core/Button'
 */import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check';
import List from './components/List';
import Item from './components/Item';
import { Button } from 'react-native';



export default function App() {

    //Observe les changements apportés à la liste
    const { myList, myTab, changeTab, openAddList, openDeleteList } = useContext(AppContext)

    //update l'état des boutons du menu en fonction de leur etat (achevé/ en cour et onglet actif)
    const isFinished = (state, title, index) => {
        if (state === true) {
            if (index === myTab) {
                return <Button style={{width: 'fit-content',marginRight: '20px'}} key={'btn'+index} onPress={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
            } else {
                return <Button style={{width: 'fit-content',marginRight: '20px'}}   key={'btn'+index} onPress={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
            }
        }
        if (index === myTab) {
            return <Button style={{width: 'fit-content',marginRight: '20px'}}  key={'btn'+index} onPress={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
        }
        return <Button style={{width: 'fit-content',marginRight: '20px'}}  key={'btn'+index} onPress={() => changeTab(index)} title={title}>  <Text>{title}</Text></Button>
    }

    return (
        <View  style={styles.layout}>
            <View  style={styles.title}>
                <Text>Ma 1ère To-Do liste sur React JS</Text>
                <View style={styles.tabList}>
                    {myList.map(({ items, title, state }, index) => {
                        return isFinished(state, title, index)
                    })}
                </View>
                <View style={styles.btnGrp}>
                    <Button style={{width: 'fit-content',marginRight: '20px'}}  onPress={openAddList} title="Add">
                    <Text>Add</Text>
                    </Button>
                    {
                        <Button style={{width: 'fit-content'}} onPress={openDeleteList} variant="contained" title="Delete"><Text>Delete</Text></Button>
                    }
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View  style={styles.subContainer}>
                    {myList.map(({ items, title, state }, index) => {
                        if (myTab === index) {
                            return <List title={title} key={'list'+index} state={state} index={index}>
                                {items.map(({ title: itemTitle, description, state: itemState }, indexItem) => {
                                    return <Item title={itemTitle} description={description} itemState={itemState}  key={'listitem'+index+'-'+indexItem} listState={state} indexList={index} indexItem={indexItem}></Item>
                                })}
                            </List>
                        } else {
                            return null
                        }
                    })
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width:100 + '%',
        backgroundColor: '#abdafc'
    },
    title: {
        width: 100+'%',
        backgroundColor: '#abdafc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    tabList: {
        width:100+ '%',
        display: 'flex',
    },
    btnGrp: {
        width: 100+'%',
        display: 'flex',
    justifyContent: 'center',
    },
    btnAdd: {
    },
    mainContainer: {
        width:100+ '%',
        backgroundColor: '#fff',
        margin: 'auto',
    },
    subContainer: {
        width: 100+'%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    btn:{
        alignSelf: 'flex-start' 
    }

});