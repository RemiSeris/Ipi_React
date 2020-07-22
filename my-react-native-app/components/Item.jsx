import React, { useState } from 'react'
import { View } from 'react-native';



const Item = ({ title }) => {

    // opn déclare une valriable d'état et un setter
    const [check, setCheck] = useState(false)


    //une fonction pour changer l'état de check
    const toogleCheck = () => {
        // si true on le passe à false et inversement
        if (check === true)
            setCheck(false)
        else
            setCheck(true)

    }

    return (
        <View style={styles.container}>
            {title}
        </View>
    )
}

export default Item