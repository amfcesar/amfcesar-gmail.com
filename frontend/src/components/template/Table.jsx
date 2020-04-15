import React from 'react';
import Rows from "./Rows";

const Table = (props) => {
 return (
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <Rows  list={props.list} 
                    load={props.load} 
                    remove={props.remove} 
                />
        </tbody>
    </table>
 )
};

export default Table;