import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Client extends Component {

    constructor(props) {
        super(props)

        this.state = {
            flage: true,
            name: '',
            price: ''
        }
    }

    changeFlage = () => {
        this.setState({ flage: !this.state.flage })
    }

    validName = (e) => {

        this.setState({ name: e.target.value })
    }

    validPrice = (e) => {

        this.setState({ price: e.target.value })
    }

    addExpens = () => {

        this.props.addExpens(this.props.clientIndex, this.state.name, this.state.price)

        this.changeFlage()
    }

    show = () => {

        if (this.state.flage) {
            return (
                <div>

                    <button onClick={() => { alert(`Your balance is: ${this.props.client.monay}`) }}>Balance</button><br />
                    <button onClick={this.changeFlage}>Action</button><br />
                    <Link to={`/edit${this.props.client.name}`} ><button>Edit</button></Link><br />
                    <Link to='/' ><button>EXIT</button></Link>
                </div>
            )
        }
        else {
            return (

                <div>
                    <h2>Make a purchase</h2>

                    <input onChange={this.validName} type="text" placeholder='name' /><br />
                    <input onChange={this.validPrice} type="number" placeholder='price' /><br />
                    <button onClick={this.addExpens} >Buy</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>wolcome {this.props.client.name}</h1>

                {this.show()}
            </div>
        )
    }
}
