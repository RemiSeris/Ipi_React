//Lorsque on veut créer un component on importe React
import React, { useState, useEffect } from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from '@material-ui/core/Button'
import { KEY_LOCAL_STORAGE } from '../const'
import AppContextProvider from '../AppContextProvider'




// on déclare un componet sous forme d'arrow funtion 
const App = () => {
    // on utilise un hooks d'état pour pouvoir moifier la page
    // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)



    return (
        <div className='layout'>
            
            <div>
                <AppContextProvider>

                </AppContextProvider>
            </div>
        </div>
    )
}



export default App;
