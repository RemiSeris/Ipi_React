//Lorsque on veut créer un component on importe React
import React from 'react';
import Exo1 from './exo1/Exo1';
import Exo2 from './exo2/Exo2';
import Exo3 from './exo3/Exo3';

const App = () => {

    return (
        <div className='layout'>
            <Exo1 />

            <Exo2 />

        </div>
    )
}


export default App;
