//Lorsqu'on veut créer un component on importe React
import React from 'react';
import Tableau from '../components/Tableau';

function renderTableData() {
      Tableau.listGens.map((list, index) => {
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

const AppTable = () => { 
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

export default AppTable;