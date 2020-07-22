import React, { useState } from 'react'
import { TextField } from '@material-ui/core';



const TextFieldExample = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        console.log('event value', event.target.value)
        setValue(event.target.value)

    }

    return (
        <TextField value={value} onChange={handleChange} />
    )
}

export default TextFieldExample