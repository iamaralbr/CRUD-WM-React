import React, { Component } from 'react'
import Axios from '../../plugins/axios'

import { clear, getUpdatedList } from './common'

export default class Table extends Component {

    constructor(props) {
        super(props)
        this.clear = clear.bind(this)
        this.getUpdatedList = getUpdatedList.bind(this)
    }

    load(user) {
        this.props.handleParent({ user })
    }

    remove(user) {
        Axios.delete(`/${user.id}`).then(_ => {
            const list = this.getUpdatedList(user, false)
            this.props.handleParent({ list })
            this.clear()
        })
    }

    renderRows() {
        return this.props.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}