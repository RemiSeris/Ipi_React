//Lorsqu'on veut créer un component on importe React
import React, { useState } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from "@material-ui/icons/Clear"
import CheckIcon from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#deffff',
            main: '#abdafc',
            dark: '#7aa9c9',
            contrastText: '#000',
        },
        secondary: {
            light: '#b8336a',
            main: '#b8336a',
            dark: '#840040',
            contrastText: '#fff',
        },
    },
});

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

let indexTab = 0;


//On déclare un component sous forme d'arrow function
const App = () => {

/* Je me suis servie des commentaires sur ce post pour réaliser mes databindings : 
https://stackoverflow.com/questions/42217579/data-binding-in-react#:~:text=Data%20binding%20in%20React%20can,as%20the%20input%20value%20changes.&text=To%20be%20short%2C%20in%20React,two%2Dway%20data%2Dbinding. */
    
// Observe les changements sur les onglets
    const [myTab, setMyTab] = useState(indexTab)
//change l'onglet en fonction de l'index sélectionné
    const changeTab = (index) => {
        setMyTab(index)
    }

//Observe les changements apportés à la liste
    const [myList, setMyList] = useState(lists)
//Ajoute un nouvel item à la liste
    const addList = () => {
        const nouvelleListe = {
            title: 'New List ' + myList.length,
            state: false,
            items: []
        }
        myList.push(nouvelleListe)
        setMyList(myList.map(list => list))
    }

//Sauvegarde l'etat de la liste dans le local storage
    const saveList = () => {
        localStorage.setItem('list', JSON.stringify(myList))
    }

//update l'état des boutons du menu en fonction de leur etat (achevé/ en cour et onglet actif)
    const isFinished = (state, title, index) => {
        if (state === true) {
            if (index === myTab) {
                return <Button startIcon={<CheckIcon />} variant="contained" color="secondary" onClick={() => changeTab(index)}>{title}</Button>
            } else {
                return <Button startIcon={<CheckIcon />} variant="outlined" color="secondary" onClick={() => changeTab(index)}>{title}</Button>

            }
        }
        if (index === myTab) {
            return <Button startIcon={<ClearIcon />} variant="contained" color="secondary" onClick={() => changeTab(index)}>{title}</Button>
        }
        return <Button startIcon={<ClearIcon />} variant="outlined" color="secondary" onClick={() => changeTab(index)}>{title}</Button>
    }

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

//mets à jour l'etat de l'item d'une liste
    const changeListItem = (indexList, indexItem, dataFromChild) => {
        myList[indexList].items[indexItem].state = dataFromChild;
        setMyList(myList.map(list => list))

        //vérifie si toutes les items de la liste sont achevés, si c'est le cas, la liste passe aussi au statut achevé
        let isStateAllTrue = true;
        myList[indexList].items.forEach(item => {
            if(item.state !==true){
                isStateAllTrue = false
            }
        })  
            myList[indexList].state = isStateAllTrue;
            setMyList(myList.map(list => list))
    }

    //Gestion de la popup de suppression de liste
    const [openDialogDeleteList, setOpen] = React.useState(false);

  const openDeleteList = () => {
    setOpen(true);
  };

  const closeDeleteList = () => {
    setOpen(false);
  };

  //Supprime la dernière ligne de la liste
  const deleteList = () => {
 
    myList.splice(myTab,1)
    setMyList(myList.map(list => list))
    setMyTab(0)    
    closeDeleteList()

}
    return (
        <MuiThemeProvider theme={theme}>
            <div className='layout'>
                <div className='title'>
                <Button variant="outlined" onClick={saveList} startIcon={<SaveIcon />} className={"btn-add"}>
                                Save List
                    </Button>
                    <h1>Ma 1ère To-Do liste sur React JS</h1>
                    <div className='tab-list'>
                        {myList.map(({ items, title, state }, index) => {
                            return isFinished(state, title, index)
                        })}
                    </div>
                    <div className='btn-grp'>
                                <Button variant="outlined" color="secondary" onClick={addList} startIcon={<EditIcon />} className={"btn-add"}>
                                    Add
                        </Button>
                        {
                                 <Button onClick={myList[myTab]?openDeleteList:null} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
                            }
                    
                               
                            </div>
                </div>
                <div className="main-container">
                    <div className='sub-container'>
                        <div className='navbar'>

 
                        </div>
                        {
                        myList.map(({ items, title, state }, index) => {
                            if(myTab === index) {
                                return <List title={title} key={index} state={state} index={index} callbackFromParent={changeList} >
                                {items.map(({ title: itemTitle, description, state:itemState }, indexItem) => {
                                    return <Item title={itemTitle} description={description} itemState={itemState} listState={state} indexList={index} indexItem={indexItem} callbackFromParent={changeListItem}></Item>
                                })}
                            </List>
                            } else {
                                return null
                            }
                           
                        })
                        }
                    </div>

                </div>

            </div>
            {/* Popin supression liste */}
            <Dialog
        open={openDialogDeleteList}
        onClose={closeDeleteList}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this list?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to delete this list: {myList[myTab].title? myList[myTab].title:'pas de liste à supprimer'}. Are you sure you want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteList} color="primary" variant="outlined">
            Yes
          </Button>
          <Button onClick={closeDeleteList} color="secondary" variant="contained" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
        </MuiThemeProvider>
    )
}

export default App;
