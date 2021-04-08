import React, { Component } from 'react'
import './App.css';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Admin from './components/Admin.jsx';
import Client from './components/Client.jsx';
import Edit from './components/Edit.jsx';

export default class App extends Component {

  state = {
    clients: []
  }

  addClient = (id, name, pass, monay) => {

    let newClient = { id: id, name: name, pass: pass, monay: monay, adminDisplay: 'none', expenses: [] }

    this.setState({ clients: [...this.state.clients, newClient] })
  }

  editClient = (clientIndex, id, name, pass, monay) => {

    let newClients = this.state.clients
    let newClient = { id: id, name: name, pass: pass, monay: monay, adminDisplay: 'none', expenses: this.state.clients[clientIndex].expenses }

    newClients[clientIndex] = newClient

    this.setState({ clients: [...newClients] })
  }

  deleteClient = (clientIndex) => {

    this.setState({
      clients: this.state.clients.filter((client, index) => (clientIndex != index))
    })
  }

  addExpens = (clientIndex, name, price) => {

    let newClients = this.state.clients
    newClients[clientIndex].expenses = [...newClients[clientIndex].expenses, { name: name, price: price }]

    this.setState({ clients: [...newClients] })
  }

  deleteExpens = (clientIndex, expensIndex) => {

    let newClients = this.state.clients

    let newClientExpenses = newClients[clientIndex].expenses.filter((expens, index) => (expensIndex != index))

    newClients[clientIndex].expenses = newClientExpenses

    this.setState({ clients: [...newClients] })
  }

  adminShow = (clientIndex) => {

    let changDisplay = 'none'

    if (this.state.clients[clientIndex].adminDisplay == 'none') {
      changDisplay = 'inline-block'
    }

    let newClients = this.state.clients
    newClients[clientIndex].adminDisplay = changDisplay

    this.setState({ clients: [...newClients] })
  }

  render() {
    return (
      <div className="App">
        <h1>CHF-BANK</h1>

        <Router>
          <Switch>
            <Route exact path='/' component={() => { return <Home clients={this.state.clients} /> }} />
            <Route exact path='/register' component={() => { return <Register addClient={this.addClient} /> }} />

            {this.state.clients.map((client, clientIndex) => {
              return (
                <Route exact path={`/edit${client.name}`} component={() => {
                  return <Edit
                    clientIndex={clientIndex}
                    editClient={this.editClient} />
                }} />
              )
            })}

            {this.state.clients.map((client, clientIndex) => {
              return (
                <Route exact path={`/${client.name}`} component={() => {
                  return <Client
                    client={client}
                    clientIndex={clientIndex}
                    addExpens={this.addExpens}
                  />
                }} />
              )
            })}

            <Route exact path='/admin' component={() => {
              return <Admin
                clients={this.state.clients}
                adminShow={this.adminShow}
                deleteClient={this.deleteClient}
                deleteExpens={this.deleteExpens}
              />
            }} />

          </Switch>
        </Router>

      </div>
    )
  }
}

