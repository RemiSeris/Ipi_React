//Lorsque on veut créer un component on importe React
import React, {useContext, useEffect, useState} from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from "@material-ui/core/Button";
import {appContext} from "../components/appContextProvider";


// // on déclare un componet sous forme d'arrow funtion


const App = () => {

    const {myLists, setMyList, defaultList} = useContext(appContext);

    //     //on crée une fonction pour ajouter un élément à la liste
    const addList = () => {
        //on pousse un nouvelle élément dans le tableau de liste
        myLists.push(defaultList);
        // on crée une copie de notre tableau pour changer la référence
        const listCpy = myLists.map(list => list);
        //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    };
//
//     //on crée une fonction pour enlever un élément à la liste
    const removeList = () => {
//         //on enléve le dernier élément du tableau de list
        myLists.pop();
//         // on crée une copie de notre tableau pour changer la référence
        const listCpy = myLists.map(list => list);
//         //on utilise le setter d'état pour changer l'états de nos liste
        setMyList(listCpy)
    };

    function clickIcon(item) {
        console.log(item);
    }

    return (
        <div className={"layout"} style={{display: "flex", alignItems: `center`}}>
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map(({items, title}) =>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <List title={title} clickIcon={() => clickIcon(items)}>
                            {
                                // On affiche les items d'une liste une à une sous forme de component
                                items.map((x) => <Item item={x}/>)
                            }
                        </List>
                    </div>// On affiche nos lists une a une sous forme de component
                )}
            {/* On utilise notre component générique Button pour effectuer l'action d'ajout et de supression d'une liste dans le tableau de list*/}
            <div style={{display: "flex", flexDirection: "column"}}>
                <Button onClick={addList} variant={'outlined'} size={"small"} style={{height: 50}}>Add</Button>
                <Button onClick={removeList} variant={'outlined'} size={"small"} style={{height: 50}}>Delete</Button>
            </div>

        </div>
    )
};


export default App;
