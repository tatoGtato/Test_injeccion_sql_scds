import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './registroCSS.css';

function Registro() {
    const history = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),

        })

        const data = await response.json()
        console.log(data)
        if (data.status === 'ok') {
            window.location.href = '/login'
            history.push('/login')
        }
    }

    return (
        <div className="vineta">
            <div className="registro">
            <h1 id="register">Register</h1>
            <form onSubmit={registerUser} className="forme">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Register" id="boton"/>
            </form>
             <Link to="/login">
                 <button type="button" id="boton2">
                      Log in
                 </button>
             </Link>
             </div>
        </div>
    )
}

export default Registro