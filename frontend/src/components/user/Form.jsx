import React, { Component } from 'react'
import Axios from '../../plugins/axios'

import { initialState } from './constant'
import { clear, getUpdatedList } from './common'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.clear = clear.bind(this)
        this.getUpdatedList = getUpdatedList.bind(this)
    }

    save = () => {
        const user = this.props.state.user
        if (!user.name || !user.email) return
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `/${user.id}` : ''
        Axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.props.handleParent({ user: initialState.user, list })
            })
    }

    updateField = (event) => {
        const user = { ...this.props.state.user }
        user[event.target.name] = event.target.value
        this.props.handleParent({ user })
    }

    render() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.props.state.user.name}
                                onChange={this.updateField}
                                placeholder="Digite o nome" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.props.state.user.email}
                                onChange={this.updateField}
                                placeholder="Digite o e-mail" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={this.save}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={this.clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}