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
