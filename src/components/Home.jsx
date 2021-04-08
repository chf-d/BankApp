import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

            userName: '',
            password: ''
        }
    }

    validUserName = (e) => {
        this.setState({ userName: e.target.value })
    }

    validPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    enter = () => {

        let caunter = 0

        if (this.state.userName == 'admin' && this.state.password == 'admin') {

            caunter++
            this.props.history.push('/admin')
        }
        else {

            this.props.clients.map((client) => {

                if (client.name == this.state.userName && client.pass == this.state.password) {

                    caunter++
                    this.props.history.push(`/${this.state.userName}`)
                }
            })
        }

        if (caunter == 0) {
            alert('Incorrect user or password')
        }
    }

    render() {
        return (
            <div>

                <input onChange={this.validUserName} placeholder='User Name' /><br />
                <input onChange={this.validPassword} placeholder='Password' /><br />
                <Link to='/register'>Create new user</Link><br />
                <button onClick={this.enter}>ENTER</button><br />
            </div>
        )
    }
}

export default withRouter(Home);