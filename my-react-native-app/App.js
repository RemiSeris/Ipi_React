import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from './AppContextProvider';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check';
import List from './components/List';
import Item from './components/Item';



export default function App() {

    //Observe les changements apportés à la liste
    const { myList, myTab, changeTab, openAddList, openDeleteList } = useContext(AppContext)

    //update l'état des boutons du menu en fonction de leur etat (achevé/ en cour et onglet actif)
    const isFinished = (state, title, index) => {
        if (state === true) {
            if (index === myTab) {
                return <Button startIcon={<CheckIcon />} variant="contained" color="secondary" onClick={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
            } else {
                return <Button startIcon={<CheckIcon />} variant="outlined" color="secondary" onClick={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
            }
        }
        if (index === myTab) {
            return <Button startIcon={<ClearIcon />} variant="contained" color="secondary" onClick={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
        }
        return <Button startIcon={<ClearIcon />} variant="outlined" color="secondary" onClick={() => changeTab(index)} title={title}><Text>{title}</Text></Button>
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
                <View className='btn-grp' style={styles.btnGrp}>
                    <Button variant="outlined" color="secondary" onClick={openAddList} startIcon={<EditIcon />} className={"btn-add"}>
                    <Text>Add</Text>
                    </Button>
                    {
                        <Button onClick={myList[myTab] ? openDeleteList : null} variant="contained" color="secondary" startIcon={<DeleteIcon />}><Text>Delete</Text></Button>
                    }
                </View>
            </View>
            <View className="main-container" style={styles.mainContainer}>
                <View className='sub-container' style={styles.subContainer}>
                    {myList.map(({ items, title, state }, index) => {
                        if (myTab === index) {
                            return <List title={title} key={index} state={state} index={index}>
                                {items.map(({ title: itemTitle, description, state: itemState }, indexItem) => {
                                    return <Item title={itemTitle} description={description} itemState={itemState} listState={state} indexList={index} indexItem={indexItem}></Item>
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
        height: 30+'vh',
        width: 100+'%',
        backgroundColor: '#abdafc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    tabList: {
        overflowX: 'auto',
        maxWidth: 750+'px',
        width:100+ '%',
        height: 55+'px',
        marginBottom: 20+'px',
    },
    btnGrp: {
        width: 100+'%'
    },
    btnAdd: {
    },
    mainContainer: {
        width:100+ '%',
        backgroundColor: '#fff',
        padding: 15+'px',
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

});