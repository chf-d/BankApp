import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            userName: '',
            password1: '',
            password2: '',
            money: ''
        }
    }

    validID = (e) => {

        let id = e.target.value

        if (id.length == 9) {

            this.setState({ id: id })
        }
        else {
            this.setState({ id: '' })
        }
    }

    validUserName = (e) => {

        let name = e.target.value

        if (name.length >= 4) {

            this.setState({ userName: name })
        }
        else {
            this.setState({ userName: '' })
        }
    }

    validPassword1 = (e) => {

        let pass = e.target.value

        if (pass.length >= 6) {

            this.setState({ password1: pass })
        }
        else {
            this.setState({ password1: '' })
        }
    }

    validPassword2 = (e) => {
        if (this.state.password1 == e.target.value) {
            this.setState({ password2: e.target.value })
        }
        else {
            this.setState({ password2: '' })
        }
    }

    validMoney = (e) => {

        let money = e.target.value

        if (money >= 0 && money <= 1000000) {

            this.setState({ money: money })
        }
        else {
            this.setState({ money: '' })
        }
    }

    addClient = () => {

        if (this.state.id != '' && this.state.userName != '' && this.state.password2 != '' && this.state.money != '') {

            this.props.addClient(this.state.id, this.state.userName, this.state.password2, this.state.money)

            this.props.history.push('/')

        }
        else {
            alert('One of the details is incorrect')
        }
    }

    render() {
        return (
            <div>
                <h1>registration</h1>
                <input onChange={this.validID} placeholder='ID' type="number" /><br />
                <input onChange={this.validUserName} placeholder='User Name' type="text" /><br />
                <input onChange={this.validPassword1} placeholder='Password' type="text" /><br />
                <input onChange={this.validPassword2} placeholder='Confirm Password' type="text" /><br />
                <input onChange={this.validMoney} placeholder='Money' type="number" /><br />

                <button onClick={this.addClient}>CREATE</button>
            </div>
        )
    }
}

export default withRouter(Register)