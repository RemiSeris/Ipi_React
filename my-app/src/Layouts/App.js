//Lorsque on veut créer un component on importe React
import React, {useEffect, useState} from 'react';
import List from '../components/List'
import Item from '../components/Item'
import Button from "@material-ui/core/Button";
import appContext from "../context/appContext";

//On simule un modéle de donée (tableau de list)
const lists = [
    {
        title: 'Liste 1',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'item1',
            },
            {
                title: 'item2',
            },
            {
                title: 'item3',
            },
        ]
    }
];

//onj déclare un template d'une list
const defaultList = {
    title: 'New liste',
    items: [
        {
            title: 'item1',
        },
        {
            title: 'item2',
        },
        {
            title: 'item3',
        },
    ]
};

// // on déclare un componet sous forme d'arrow funtion


const App = () => {

//     // on utilise un hooks d'état pour pouvoir moifier la page
//     // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
    const [myLists, setMyList] = useState(lists);
    useEffect(() => {
        // on recup les valeurs du local storage => la liste par defaut
        if (localStorage.getItem("myLists")) {
            setMyList(JSON.parse(localStorage.getItem("myLists")));
        }
    }, []);
    useEffect(() => {
        if (myLists !== JSON.parse(localStorage.getItem(`myLists`))) {
            localStorage.setItem("myLists", JSON.stringify(myLists));
        }
    }, [myLists]);
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

    const localStorageList = () => {
        localStorage.setItem("myLists", JSON.stringify(myLists));
    };

    function clickIcon(item) {
        console.log(item);
    }

    class appContextButton extends React.Component {
        // Définit un contextType pour lire le contexte de thème actuel.  React va
        // trouver le Provider de thème ancêtre le plus proche et utiliser sa valeur.
        // Dans cet exemple, le thème actuel est “dark”.
        static contextType = appContext;
        render() {
            return <Button theme={this.context} />;
        }
    }

    return (
        <div className={"layout"} style={{display: "flex", alignItems: `center`}}>
            {/*<appContext.provider value={appContext} ></appContext.provider>*/}
            {
                // On utilise la méthode .map pour parcourir les éléments,
                // de nos tableau et renvoyer pour chaque élément le component indiquée
                myLists.map(({items, title}) =>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <List title={title} clickIcon={() => clickIcon(items)}>
                            {
                                // On affiche les items d'une liste une à une sous forme de component
                                items.map(({title: itemTitle}) => <Item title={itemTitle}/>)
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
