import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jwt from 'jsonwebtoken'
import './NavbCSS.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Vender extends Component{

	state={
		nom: ""
	};


	componentDidMount = () => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			this.setState({ nom: user.name })
			if (!user) {
				localStorage.removeItem('token')
				window.location.href = '/login'
			}  		
		}
		
	}

	render(){
		return(
		    <div>
		    	<h1 className="texto_nav"> Bienvenido {this.state.nom}</h1>

		    </div>

		)
	}
}