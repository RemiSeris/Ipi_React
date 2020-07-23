import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
    Modal,
    Text,
    Button
} from "react-native";

export const AppContext = createContext({})

//On simmule un modèle de données (tableau de liste)
const lists = [
    {
        title: 'Ma 1er Liste',
        state: false,
        items: [
            {
                title: 'item1',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item2',
                description: 'blah blaha',
                state: false
            },
            {
                title: 'item3',
                description: 'blah blaha',
                state: false
            },
        ]
    }]

const AppContextProvider = ({ children }) => {

    //déclaration des variables qui seront amenées a etre modifiée
    const [myList, setMyList] = useState(lists)
    const [myTab, setMyTab] = useState(0)
    const [myItemIndex, setMyItemIndex] = useState(0)
    const [myListTitle, setMyListTitle] = useState('New List ' + myList.length)
    const [myItemTitle, setMyItemTitle] = useState('')
    const [myItemDescription, setMyItemDescription] = useState('')

    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify(myList)
            await AsyncStorage.setItem('list', jsonValue)
        } catch (e) {
            console.log('Error on store data', e)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('list')
            return JSON.parse(jsonValue)
        } catch (e) {
            console.log(e)
        }
    }
    //SAUVEGARDE ET CHARGEMENT
    //charge la liste présente dans le local storage si elle existe
    useEffect(async () => {
        const myDataFromStorage = await getData()
        if (myDataFromStorage) {

            setMyList(myDataFromStorage)
            console.log(myList)
        }
    }, [])
    //sauvegarde la liste dans le local storage à chaque modification sur la liste
    useEffect(() => {
        storeData()
    }, [myList])


    //GESTION DES INDEX DU TABLEAU
    //recupère la valeur de l'index de l'item actuellement sélectionné
    const changeItemIndex = (index) => {
        setMyItemIndex(index)
    }
    //recupère la valeur de l'index de la liste actuellement sélectionné
    const changeTab = (index) => {
        setMyTab(index)
    }
    //OBSERVABLES SUR LES INPUTS
    //recupère le titre de la liste
    const changeMyListTitle = (event) => {
        console.log(event)
        setMyListTitle(event.target.value)
    }
    //recupère le titre de l'item
    const changeMyItemTitle = (event) => {
        setMyItemTitle(event.target.value)
    }
    //recupère la description de l'item
    const changeMyItemDescription = (event) => {
        setMyItemDescription(event.target.value)
    }

    //GESTION DU TABLEAU
    //mets à jour la progression (achevée/inachevée) d'une liste
    const changeList = (index, dataFromChild) => {
        myList[index].state = dataFromChild;
        setMyList(myList.map(list => list))
        //mets à jour les items de la liste en fonction de l'etat la liste
        myList[index].items.forEach(item => {
            item.state = dataFromChild
        })
        setMyList(myList.map(list => list))
    }

    //mets à jour la progression (achevée/inachevée) d'un item
    const changeListItem = (indexList, indexItem, dataFromChild) => {
        myList[indexList].items[indexItem].state = dataFromChild;
        setMyList(myList.map(list => list))
        //vérifie si toutes les items de la liste sont achevés, si c'est le cas, la liste passe aussi au statut achevé
        let isStateAllTrue = true;
        myList[indexList].items.forEach(item => {
            if (item.state !== true) {
                isStateAllTrue = false
            }
        })
        myList[indexList].state = isStateAllTrue;
        setMyList(myList.map(list => list))
    }

    //Supprime la liste sélectionnée
    const deleteListEntry = () => {
        myList.splice(myTab, 1)
        setMyList(myList.map(list => list))
        setMyTab(0)
    }

    //Supprime l'item sélectionnée
    const deleteItemEntry = () => {
        myList[myTab].items.splice(myItemIndex, 1)
        setMyItemIndex(0)
        setMyList(myList.map(list => list))
    }

    //ajoute une liste dans le tableau
    const addListEntry = () => {
        const nouvelleListe = {
            title: '',
            state: false,
            items: []
        }
        nouvelleListe.title = myListTitle
        myList.push(nouvelleListe)
        setMyList(myList.map(list => list))
        setMyListTitle('New List ' + myList.length)
    }

    //ajoute un item dans la liste sélectionnée
    const addItemEntry = () => {
        const nouvelItem = {
            title: '',
            state: false,
            description: ''
        }
        nouvelItem.title = myItemTitle
        nouvelItem.description = myItemDescription
        myList[myTab].items.push(nouvelItem)
        setMyList(myList.map(list => list))
        setMyTab(0)
        setMyItemTitle('')
        setMyItemDescription('')
    }

    //GESTION DES POPUPS
    //Gestion de la popup de suppression de liste
    const [openDialogDeleteList, setOpenDeleteList] = useState(false);
    //ouvre la popup de suppression de liste
    const openDeleteList = () => {
        setOpenDeleteList(true);
    };
    //ferme la popup de suppression de liste
    const closeDeleteList = () => {
        setOpenDeleteList(false);
    };
    //Supprime la liste selectionnée lorsqu'on valide
    const deleteList = () => {
        deleteListEntry()
        closeDeleteList()
    }

    //Gestion de la popup de suppression d'item
    const [openDialogDeleteItem, setOpenDeleteItem] = useState(false);
    //ouvre la popup de suppression d'item
    const openDeleteItem = () => {
        setOpenDeleteItem(true);
    };
    //ferme la popup de suppression d'item
    const closeDeleteItem = () => {
        setOpenDeleteItem(false);
    };
    //Supprime l'item selectionné dans la liste en cours lorsqu'on valide
    const deleteItem = () => {
        deleteItemEntry()
        closeDeleteItem()
    }

    //Gestion de la popup ajout de liste
    const [openDialogAddList, setOpenAddList] = useState(false);
    //ouvre la popup d'ajout de liste
    const openAddList = () => {
        console.log('true')
        setOpenAddList(true);
    };
    //ferme la popup d'ajout de liste
    const closeAddList = () => {
        console.log('false')

        setOpenAddList(false);
    };
    //Ajoute une nouvelle liste au click sur le bouton
    const addList = () => {
        addListEntry()
        closeAddList()
    }

    //Gestion de la popup ajout d'item
    const [openDialogAddItem, setOpenAddItem] = useState(false);
    //ouvre la popup d'ajout d'item
    const openAddItem = () => {
        setOpenAddItem(true);
    };
    //ferme la popup d'ajout d'item
    const closeAddItem = () => {
        setOpenAddItem(false);
    };
    //Ajoute un nouvel item au click sur le bouton
    const addItem = () => {
        addItemEntry()
        closeAddItem()
    }

    const value = {
        myList,
        myTab,
        setMyList,
        myListTitle,
        setMyTab,
        changeList,
        changeTab,
        changeListItem,
        deleteListEntry,
        addListEntry,
        setMyListTitle,
        changeMyListTitle,
        openAddList,
        openDeleteList,
        openAddItem,
        changeItemIndex,
        openDeleteItem,
        addListEntry
    }

    return (
        <AppContext.Provider value={value}>
            {children}
            {/* Popin supression liste */}
            <Modal animationType="slide" visible={openDialogDeleteList} onRequestClose={closeDeleteList}>
                <View>
                    <Text>{'Are you sure you want to delete this list?'}</Text>
                    <Button onPress={deleteList} title='Yes'></Button>
                    <Button onPress={closeDeleteList} title='Cancel'></Button>
                </View>

            </Modal>

            {/* Popin ajout liste */}
            <Modal animationType="slide" visible={openDialogAddList} onRequestClose={closeAddList}>
                <View>
                    <Text>{'Add a new list!'}</Text>
                    <TextInput value={myListTitle} onChangeText={changeMyListTitle} id="list-name"></TextInput>
                    <Button onPress={addList} title='Add a new List'></Button>
                    <Button onPress={closeAddList} title='Cancel'></Button>
                </View>

            </Modal>

            {/* Popin ajout item */}
            <Modal animationType="slide" visible={openDialogAddItem} onRequestClose={closeAddItem}>
                <View>
                    <Text>{'Add a new item!'}</Text>
                    <TextInput value={myItemTitle} onChangeText={changeMyItemTitle} id="item-name"></TextInput>
                    <TextInput value={myItemDescription} onChangeText={changeMyItemDescription} id="description-name"></TextInput>

                    <Button onPress={addItem} title='Add a new Item'></Button>
                    <Button onPress={closeAddItem} title='Cancel'></Button>
                </View>

            </Modal>


            {/* Popin suppression item */}
            <Modal animationType="slide" visible={openDialogDeleteItem} onRequestClose={closeDeleteItem}>
                <View>
                    <Text>{'Are you sure you want to delete this Item?!'}</Text>
                    <Button onPress={deleteItem} title='Yes'></Button>
                    <Button onPress={closeDeleteItem} title='Cancel'></Button>
                </View>

            </Modal>

        </AppContext.Provider>
    )
}

export default AppContextProvider