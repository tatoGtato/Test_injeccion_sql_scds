import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginCSS.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href = '/inicio'
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <div className="vineta">
            <div className="login">
            <h1 id="log">Login</h1>
            <form onSubmit={loginUser} className="forme">
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
                <input type="submit" value="Login" className="boton4"/>
            </form>
            <Link to="/registro">
                 <button type="button" id="boton3">
                      registro
                 </button>
             </Link>
            </div>
        </div>
    )
}

export default Login