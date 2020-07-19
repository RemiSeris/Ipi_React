import React,{useState} from 'react'
import CheckBox from '@material-ui/core/Checkbox'


/*
- Importer la checkbox
- Le rajouter au HTML de l'item
- Mettre le props check de la checkbox sur un état d'un component item
- Binder la props onClick de la div principale de l'item avec une fonction appelée toogleCheck
- Dans la fonction, passer check de true à false et inversement
- Vérification de l'état avec un console log.

*/


const Item = ({ title }) => {
    //on déclare une variable d'état et un setter
    const[check, setCheck]=useState(false)

    console.log('Check',check)
    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        //si true on le passe à false et inversement
        if (check===true)
            setCheck(false)
        else
            setCheck(true)
    }

    return(
        <div onClick = {toogleCheck}>   
            {title}
            {/*on utilise le component checkbox de material ui pour afficher l'état de l'item*/}
            <CheckBox checked={check}/>
        </div>
    )
  
}

export default Item