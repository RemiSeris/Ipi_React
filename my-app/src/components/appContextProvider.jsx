import React, {useContext, useEffect, useState} from "react";

export const appContext = React.createContext({});

const lists = [
    {
        title: 'Liste 1',
        items: [
            {
                title: 'item1',
                validate:false
            },
            {
                title: 'item2',
                validate:false
            },
            {
                title: 'item3',
                validate:false
            },
        ]
    },
    {
        title: 'Liste 2',
        items: [
            {
                title: 'item1',
                validate:false
            },
            {
                title: 'item2',
                validate:false
            },
            {
                title: 'item3',
                validate:false
            },
        ]
    },
    {
        title: 'Liste 3',
        items: [
            {
                title: 'item1',
                validate:false
            },
            {
                title: 'item2',
                validate:false
            },
            {
                title: 'item3',
                validate:false
            },
        ]
    }
];

const AppContextProvider = ({children}) => {
    const [myLists, setMyList ] = useState(lists);
//On simule un modéle de donée (tableau de list)

//onj déclare un template d'une list
const defaultList = {
    title: 'New liste',
    items: [
        {
            title: 'item1',
            validate:false
        },
        {
            title: 'item2',
            validate:false
        },
        {
            title: 'item3',
            validate:false
        },
    ]
};

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

    const value = {
        myLists,
        setMyList,
        addList,
        removeList,
        defaultList
    };


//     // on utilise un hooks d'état pour pouvoir moifier la page
//     // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)

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





    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    );
};

export default AppContextProvider;
