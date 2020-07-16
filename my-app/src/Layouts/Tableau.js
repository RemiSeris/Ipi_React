import React, { useState } from 'react'

class Tableau {
    constructor(props) {
     
       this.state = { //state is by default an object
          listGens: [
            { id: 1, name: 'lucas', age: 21, email: 'lucas@email.com' },
            { id: 2, name: 'jean connect', age: 19, email: 'jean@email.com' },
            { id: 3, name: 'sangoku', age: 23, email: 'goku@email.com' },
            { id: 4, name: 'hisoka', age: 25, email: 'hisoka@email.com' }
        ]
       }
    }
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
       return (
          <div>
             <h1>React Dynamic Table</h1>
          </div>
       )
    }
 }

function renderTableData() {
   this.state.listGens.map((list, index) => {
    const { id, name, age, email } = list //destructuring
    return (
       <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
       </tr>
    )
 })
}

const Table = () => {
   return (
      <div>
         <h1 id='title'>React Dynamic Table</h1>
         <table id='students'>
            <tbody>
               {renderTableData()}
            </tbody>
         </table>
      </div>
   )
}
 
 export default Table //exporting a component make it reusable and this is the beauty of react