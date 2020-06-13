import React, { Component } from 'react'
import Axios from '../../plugins/axios'
import Main from '../template/Main'
import Form from './Form'
import Table from './Table'
import { headerProps, initialState } from './constant'

export default class Users extends Component {

    constructor(props) {
        super(props)
        this.state = { ...initialState }
    }

    componentDidMount() {
        Axios().then(resp => {
            this.setState({ list: resp.data })
        })
    }

    handleParent = (state) => {
        this.setState(state)
    }

    render() {
        return (
            <Main {...headerProps}>
                <Form state={this.state} handleParent={this.handleParent} />
                <Table state={this.state} handleParent={this.handleParent} />
            </Main>
        )
    }
}