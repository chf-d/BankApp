import React from 'react'

export default function Admin(props) {

    let Show = (clientIndex) => {

        props.adminShow(clientIndex)
    }

    return (
        <div>

            <h1>Manager</h1>

            {props.clients.map((client, clientIndex) => {
                return (

                    <div>
                        {client.name} {client.id}

                        <button onClick={() => { Show(clientIndex) }}>+</button>
                        <br />
                        <div style={{ display: client.adminDisplay }}>

                            {client.expenses.map((expens, expensIndex) => {
                                return (
                                    <div>
                                        {expens.name} {expens.price}
                                        <button onClick={() => { props.deleteExpens(clientIndex, expensIndex) }} >del</button>
                                    </div>
                                )
                            })}

                            <button onClick={() => { props.deleteClient(clientIndex) }}>delete client</button>
                        </div><br /><br />
                    </div>
                )
            })}
        </div>
    )
}

