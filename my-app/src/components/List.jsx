import React, {useState}from 'react'
import Switch from '@material-ui/core/Switch'

const List = ({ children, title }) => {
    const [checked, setChecked]=useState(false)

    const toogleCheck=() =>{
        //on fait l'inverse de la valeur actuelle
        setChecked(!checked)
        /*ou:
        if (checked===true)
            setChecked(false)
        else
            setChecked(true)
        
        */ 
    }
    return (
        <div className={'list'}>
            <div className="listTitle">
                {title}
                
            </div>
            <div className={'listItems'}>
                {children}
            </div>
            {/*ici j'ajoute un switch de material UI, lorsqu'on clique dessus il change d etat*/}
            <Switch
            checked={checked}
            onChange={toogleCheck}
            
            />
        </div>
    )
}

export default List