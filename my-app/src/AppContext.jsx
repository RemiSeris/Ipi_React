import React, { createContext, useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'

export const AppContext = createContext({})

//On simmule un modèle de données (tableau de liste)
const lists = [
    {
        title: 'Liste 1',
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
    },
    {
        title: 'Liste 2',
        state: true,
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
    },
    {
        title: 'Liste 3',
        state: true,
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
    }
]

const AppContextProvider = ({children}) => {



    const [myList, setMyList] = useState(lists)
    // Observe les changements sur les onglets
    const [myTab, setMyTab] = useState(0)
    const [myListTitle, setMyListTitle] = useState('New List ' + myList.length)
    useEffect(()=>{
        let loadedList = JSON.parse(localStorage.getItem('list'))
        if(loadedList !== undefined && loadedList !== null){
           setMyList(loadedList)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(myList))
    },[myList])
    //mets à jour la progression d'une liste
    const changeList = (index, dataFromChild) => {
        myList[index].state = dataFromChild;
        setMyList(myList.map(list => list))
        //mets à jour les items de la liste en fonction de l'etat la liste
        myList[index].items.forEach(item => {
            item.state = dataFromChild
        })
        setMyList(myList.map(list => list))
    }

    const changeTab = (index) => {
        setMyTab(index)
    }

    
    //mets à jour l'etat de l'item d'une liste
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

        //Supprime la dernière ligne de la liste
        const deleteListEntry = () => {
            myList.splice(myTab, 1)
            setMyList(myList.map(list => list))
            setMyTab(0)
        }

        const addListEntry = () => {
            const nouvelleListe = {
                title: '',
                state: false,
                items: []
            }
            nouvelleListe.title = myListTitle
    
            myList.push(nouvelleListe)
            setMyList(myList.map(list => list))
            setMyTab(0)
            setMyListTitle('New List ' + myList.length)
           
        }


        //ouvre la popup de suppression de liste
        const changeMyListTitle= (event) => {
            setMyListTitle(event.target.value)
        }

                //Gestion de la popup de suppression de liste
                const [openDialogDeleteList, setOpenDeleteList] = React.useState(false);
                //ouvre la popup de suppression de liste
                const openDeleteList = () => {
                    setOpenDeleteList(true);
                };
                //ferme la popup de suppression de liste
                const closeDeleteList = () => {
                    setOpenDeleteList(false);
                };
                //Supprime la dernière ligne de la liste
                const deleteList = () => {
                    deleteListEntry()
                    closeDeleteList()
                }
            
                //Gestion de la popup ajout de liste
                const [openDialogAddList, setOpenAddList] = React.useState(false);
                    // Observe les changements sur l'input du titre de la liste
                //ouvre la popup de suppression de liste
            
                const openAddList = () => {
                    setOpenAddList(true);
                };
                //ferme la popup de suppression de liste
                const closeAddList = () => {
                    setOpenAddList(false);
                };
                //Supprime la dernière ligne de la liste
                const addList = () => {
                    addListEntry()
                    closeAddList()
                }

    const value = {
        myList,
        setMyList,
        myTab,
        setMyTab,
        changeList,
        changeTab,
        changeListItem,
        deleteListEntry,
        addListEntry,
        myListTitle,
        setMyListTitle,
        changeMyListTitle,
        openAddList,
        openDeleteList
    }




    return (
        <AppContext.Provider value={value}>
            {children}
                    {/* Popin supression liste */}
                    <Dialog open={openDialogDeleteList} onClose={closeDeleteList} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this list?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to delete this list: {myList[myTab].title ? myList[myTab].title : 'pas de liste à supprimer'}. Are you sure you want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={deleteList} color="primary" variant="outlined">Yes</Button>
                    <Button onClick={closeDeleteList} color="secondary" variant="contained" autoFocus>No</Button>
                </DialogActions>
            </Dialog>

            {/* Popin ajout liste */}
            <Dialog open={openDialogAddList} onClose={closeAddList} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Add a new list!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to add a new list! Choose a name for your list:
                    </DialogContentText>
                    <FormControl>
                            <InputLabel htmlFor="input-with-icon-adornment">Your list name:</InputLabel>
                            <Input value={myListTitle} onChange={changeMyListTitle} inputProps={{maxLength: 15,}} id="list-name"startAdornment={
                                    <InputAdornment position="start">
                                        <EditIcon />
                                    </InputAdornment>}/>
                        </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={addList} color="primary" variant="outlined">Add a new List</Button>
                    <Button onClick={closeAddList} color="secondary" variant="contained" autoFocus>Cancel</Button>
                </DialogActions>
            </Dialog>
        </AppContext.Provider>
    )


}

export default AppContextProvider