import React, { useContext } from 'react';
import List from '../components/List';
import Item from '../components/Item';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextFieldExample from '../components/TextFieldExample';
import { AppContext } from '../AppContextProvider';



const App = () => {
    const { myLists, addList, removeList } = useContext(AppContext)



    return (
        <div>

            <div className='buttonContenair'>
                <div>
                    <Button onClick={addList} variant='contained' color='primary'>
                        {"ADD"}
                    </Button>
                </div>
                <div>
                    <Button onClick={removeList} variant='contained' color='secondary' startIcon={<DeleteIcon/>}>
                        {"DELETE"}
                    </Button>
                </div>
            </div>
            <div className='layout'>
                <TextFieldExample/>
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
            </div>

        </div>
    )
}

export default App;