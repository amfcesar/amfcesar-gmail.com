import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Main from '../template/Main';
import Form from "../template/Form";
import Table from '../template/Table';

const sort = (a, b) => a.name.localeCompare(b.name)

const UserCrud = () => {

    const [user, setUser] = useState({}); 
    const [list, setList] = useState([])

    function clear() {
        setUser({name: '', email: ''});
    }

    useEffect(()=> {
        axios(process.env.REACT_APP_BASE_URL).then(resp => {
            setList(resp.data.sort(sort));
        })
    },[])

   async function save () {
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${process.env.REACT_APP_BASE_URL}/${user.id}` : process.env.REACT_APP_BASE_URL;
        
        if(!user.name || !user.email ) return false;

        const response = await axios({url, method, data: user});

        setList(getUpdatedList(response.data).sort(sort));
        clear();
    }

   function getUpdatedList(user, add = true) {
        const newList = list.filter(u => u.id !== user.id);
        if(add) newList.unshift(user);
        return newList;
    }

    function updateField(event) {
        const newUser = { ...user };
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    }

    function load(user) {
        setUser(user);
    }

    function remove(user) {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/${user.id}`).then(() => {
            const list = getUpdatedList(user, false);
            setList(list);
        })
    }

    return (
        <Main  icon='users'
                title= 'Usuários' 
                subtitle='Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'>
                <Form name={user.name} 
                      email={user.email} 
                      updateField={updateField.bind(this)} 
                      save={save.bind(this)} 
                      clear={clear.bind(this)} />

                <Table list={list}
                load={load.bind(this)}
                remove={remove.bind(this)} /> 
        </Main>
    );
};

export default UserCrud;