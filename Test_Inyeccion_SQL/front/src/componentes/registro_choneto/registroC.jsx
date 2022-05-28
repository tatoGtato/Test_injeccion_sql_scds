import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Axios from 'axios'; 
import './registroCSS.css';

function RegistroC() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        console.log("sakbhjasjchachj");
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error.response)
        })
    };

    return (
        <div className="vineta">
            <div className="registro">
            <h1 id="register">Register</h1>
            <form className="forme">
                <input
                    type="text"
                    placeholder="Username"
                    onChange = {(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <br />
                <input
                    type="text"
                    placeholder="Password"
                    onChange = {(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <br />
            </form>
            <button onClick={register}> Register </button>
             <Link to="/loginc">
                 <button type="button" id="boton2">
                      Log in
                 </button>
             </Link>
             </div>
        </div>
    )
}

export default RegistroC