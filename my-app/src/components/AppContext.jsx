import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { AppContext } from '../AppContextProvider'
import { List } from '../components/List'


const AppList = () => {
    const { list, setList } = useContext(AppContext)
    const { items, setItems } = useContext(AppContext)

    const defaultLists = [
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
    ]

    //onj déclare un template d'une list
    const defaultList = {
        title: 'Nouvelle liste',
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


    // on déclare un componet sous forme d'arrow funtion 
    const App = () => {
        // on utilise un hooks d'état pour pouvoir moifier la page
        // const [maVariable d'état, mon Setter de la variable] = useState(ma valeur initial)
        const [myLists, setMyList] = useState(defaultLists)


        //On utilise un useEffect pour utiliser un effet
        useEffect(() => {
            const mydataFromStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))
            if (mydataFromStorage)
                setMyList(mydataFromStorage)
        }, [])

        useEffect(() => {
            const mydataFromStorage = JSON.parse(localStorage.getItem(keys))
            if (mydataFromStorage)
                setMyList(mydataFromStorage)
        }, [])

        useEffect(() => { })



        useEffect(() => {
            localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(myLists))
        }, [myLists])

        //on crée une fonction pour ajouter un élément à la liste
        const addList = () => {

            //on pousse un nouvelle élément dans le tableau de liste
            myLists.push(defaultList)

            // on crée une copie de notre tableau pour changer la référence 
            const listCpy = myLists.map(list => list)

            //on utilise le setter d'état pour changer l'états de nos liste
            setMyList(listCpy)
        }

        //on crée une fonction pour enlever un élément à la liste
        const removeList = () => {

            //on enléve le dernier élément du tableau de list
            myLists.pop()

            // on crée une copie de notre tableau pour changer la référence 
            const listCpy = myLists.map(list => list)

            //on utilise le setter d'état pour changer l'états de nos liste
            setMyList(listCpy)
        }


        return (
        
        )
    }


    export default Counter1
