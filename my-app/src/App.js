//Lorsque on veut créer un component on importe React
import React from 'react';
import Exo1 from './exo1/Exo1'
// import Exo2 from './exo2/Exo2'
// import Exo3 from './exo3/Exo3'
// import Exo4 from './exo4/Exo4'

const App = () => {

    return (
        <div className='layout'>
            {
                <Exo1 />
                /*
                 
                <Exo2/>
                <Exo3/>
                <Exo4/> 
                */
            }
        </div>
    )
}


export default App;
