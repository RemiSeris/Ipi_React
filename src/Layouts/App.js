import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Item from '../components/Item';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import appContextProvider from '../appContextProvider';


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
]

const defaultList =
{
    title: 'Liste ',
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

const App = () => {



    return (
        <div className='layout'>

            <div>
                <appContextProvider>

                </appContextProvider>
            </div>


        </div>
    )
}


export default App;
