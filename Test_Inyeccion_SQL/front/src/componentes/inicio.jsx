import React, { Component, useState, useEffect } from 'react';
import axios from "axios";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import Notas from './notas/notas.jsx'
import NotasPreview from './notas/notas_preview.jsx'
import FileUpload2 from './libros/libros.jsx'
import Musica from './musica/musica.jsx'
import Navb from './Navb.jsx'
import Tasks from './recordatorios/calendario.jsx'
import jwt from 'jsonwebtoken'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style_main.css';
import './style_tabs.css';


function Inicio() {

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

  useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				window.location.href = '/login'
			} 
		}
	}, [])

  return (
  	<div>
  		<div className="NavB">
  			<Navb/>
  		</div>

	    <div className="todo">
			      <Tabs defaultActiveKey="forth" tabClassName="tabs">
			      	<Tab eventKey="first" title="Recordatorios" tabClassName="tabs4">
			          <Tasks/>
			        </Tab>
			        <Tab eventKey="second" title="Musica" tabClassName="tabs2">
			        	<Musica/>
			        </Tab>
			        <Tab eventKey="third" title="Libros/Notas" tabClassName="tabs3">
			          <FileUpload2
				          accept=".jpg,.png,.jpeg"
				          label="Profile Image(s)"
				          multiple
				          updateFilesCb={updateUploadedFiles}
				        />
			        </Tab>
			      </Tabs>
		</div>
	</div>

  );
}

export default Inicio;
