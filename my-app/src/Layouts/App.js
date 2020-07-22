//Lorsque on veut créer un component on importe React
import React from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import TextFieldExample from '../components/TextFieldExample'
import Popup from '../components/Popup';

// on déclare un componet sous forme d'arrow funtion 
const App = () => {
    const { myLists, addList, removeList, setOpen } = useContext(AppContext)

    const openPopup = () => {
        setOpen(true)
    }

<<<<<<< HEAD
    //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {

        //on enléve le dernier élément du tableau de list
        myLists.pop()

        // on crée une copie de notre tableau pour changer la référence 
        const listCpy = myLists.map(list => list)

        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    }



<<<<<<< HEAD
    const saveList = () => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
    }

    const getList = () => {
        localStorage.getItem(KEY_LOCAL_STORAGE)
    }

=======
>>>>>>> f962d35f2e969dbd4ddce38acd087985547c958a
=======
>>>>>>> 5856a829ed37b434cb1117660e7e10f7c3c82902
    return (
        <div className='layout'>
            <Popup />
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map((list) =>
                    // On affiche nos lists une a une sous forme de component
                    <List list={list} >
                        {
                            // On affiche les items d'une liste une à une sous forme de component
                            list.items.map(({ title: itemTitle }) => <Item title={itemTitle} />)
                        }
                    </List>
                )}
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={openPopup} variant='contained'>
                    {"ADD"}
                </Button>
                <Button onClick={removeList}>
                    {"DELETE"}
                </Button>
            </div>


        </div>
    )
}


export default App;
