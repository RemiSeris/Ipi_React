import React, {useContext} from 'react'

const AppContext = () => {

    const {myLists} = useContext()

    const [myLists, setMyList] = useState(lists)

    useEffect(() => {
        var mydataFromLocalStorage = JSON.parse(localStorage.getItem('myListState'))
        if (mydataFromLocalStorage)
        setMyList(mydataFromLocalStorage)

    }, [])

    useEffect(() => {
        localStorage.setItem('myListState',JSON.stringify(myLists))
    },[myLists])


    const addList = () => {
        console.log("click ajoute")
        myLists.push(defaultList)
        const listCpy = myLists.map(list => list)
        setMyList(listCpy)
        console.log('myList',myLists)
    }

    const removeList = () => {
        console.log("click supprime")
        myLists.pop()
        const listCopy = myLists.map(list => list)
        setMyList(listCopy)
    }

return (
    <div>
    <div className='buttonContenair' >
        <div>
            <Button variant="contained" color="primary" onClick={addList}>ajouter</Button>
        </div>
        <div>
            <Button variant="contained" color="secondary" onClick={removeList} startIcon={<DeleteIcon />}>Supprimer</Button>
        </div>
    </div>
    

    <div className='layout'>
        {
            myLists.map(({ items, title }) =>
                <List title={title}  >
                    {
                        items.map(({ title: itemTitle }) => <Item title={title} />)
                    }
                </List>
            )}

    </div>

</div>
)
}