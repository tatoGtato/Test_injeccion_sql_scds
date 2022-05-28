import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './loginCSS.css';

function LoginC() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            
            if (response.data.message){
                setLoginStatus(response.data.message)    
            } else {
                setLoginStatus(response.data[0].username)
            }
            

        }).catch(error => {
            console.log(error.response);
        })
    };

    return (
        <div className="vineta">
            <div className="login">
            <h1 id="log">Login</h1>
            <form  className="forme">
                <input
                    type="text"
                    placeholder="Username"
                    onChange = {(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <br />
                <input
                    type="text"
                    placeholder="Password"
                    onChange = {(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br />
            </form>
            <button onClick={login}> Login </button>
            <Link to="/registroc">
                 <button type="button" id="boton3">
                      registro
                 </button>
             </Link>
            </div>

            <h1> {loginStatus} </h1>

        </div>
    )
}

export default LoginC