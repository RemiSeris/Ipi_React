import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core'
import "./exo3.css"


const KEY_LOCAL_STORAGE = 'my_title'




const Exo3 = () => {
    const [inputValue, setInputValue] = useState("this is textfield")

    const save = () => {
        
     localStorage.setItem('KEY_LOCAL_STORAGE', JSON.stringify(inputValue))   
    }
    return (
        <div className="exo3">
            <TextField label={inputValue}></TextField>
            <Button onClick={save} title="save">change</Button>
        </div>
    )
}

export default Exo3