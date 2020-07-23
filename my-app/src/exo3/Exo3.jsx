import React, {useState,useEffect} from 'react'
import { TextField, Button } from '@material-ui/core'
import "./exo3.css"

const KEY_LOCAL_STORAGE = 'my_title'

const Exo3 = () => {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
        if (mydataFromStorage)
            mydataFromStorage = 'toto'
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputValue))
    }, [inputValue])
    


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        setInputValue(inputValue)
    }




    return (
        <div className={"exo3"}>
  
            <div className="textField">
                <TextField className="input" value={inputValue} onChange={handleChange} label='name' />
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    {"Save"}
                </Button>
            </div>
    

        </div>
    )
}

export default Exo3