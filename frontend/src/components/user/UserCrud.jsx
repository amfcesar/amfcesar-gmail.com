import React, { Component } from 'react'
import axios from 'axios';
import Main from '../template/Main';
import Form from "../template/Form";
import Table from '../template/Table';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const initialState = {
    user: { name: '', email: '' },
    list: []
}

const sort = (a, b) => a.name.localeCompare(b.name)

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(process.env.REACT_APP_BASE_URL).then(resp => {
            this.setState({ list: resp.data.sort(sort) })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save = async ()=> {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${process.env.REACT_APP_BASE_URL}/${user.id}` : process.env.REACT_APP_BASE_URL;
        
        if(!user.name || !user.email ) return false;

        const response = await axios({url, method, data: user});
 
        const list = this.getUpdatedList(response.data);
        this.setState({ user: initialState.user, list: list.sort(sort) });

    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    load(user) {
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        })
    }
 
    render() {
        return (
            <Main {...headerProps}>
                <Form name={this.state.user.name} 
                      email={this.state.user.email} 
                      updateField={this.updateField.bind(this)} 
                      save={this.save.bind(this)} 
                      clear={this.clear.bind(this)} 
                      />

                <Table list={this.state.list}
                load={this.load.bind(this)}
                remove={this.remove.bind(this)}
                 /> 
            </Main>
        )
    }
}