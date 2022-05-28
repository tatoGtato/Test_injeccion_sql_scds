import React from 'react'
import Inicio from "./componentes/inicio";
import Registro from "./componentes/registro/registro";
import Login from "./componentes/login/login";
import RegistroC from "./componentes/registro_choneto/registroC";
import LoginC from "./componentes/login_choneto/loginC";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export function App() {
  return (   
      <div className = "App">
        <Router>
          <Routes>
            <Route path = "/inicio" element={ <Inicio/> }/>
            
            <Route path = "/registro" element={ <Registro/> }/>
            <Route path = "/login" element={ <Login/> }/>

            <Route path = "/registroc" element={ <RegistroC/> }/>
            <Route path = "/loginc" element={ <LoginC/> }/>
          </Routes>
        </Router>
      </div>
  );
}
