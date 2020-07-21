import React, {useContext, useEffect, useState} from "react";

export const appContext = React.createContext({});


//On simule un modéle de donée (tableau de list)
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


const AppContextProvider = ({children}) => {
    const [myLists, setMyList ] = useState(lists);
    const value = {
        myLists,
        setMyList,
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
