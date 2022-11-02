import React from 'react'
import HeaderPerfil from "./Header/Header_perfil";
/* import Header from './Header'; */
import HeaderCliente from './Header/HeaderCliente';
/* import Home from './Home'; */
import ClientHome from "./ClientHome";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Client = () => {
  return (
    <Router>
      <div>
        <HeaderPerfil/>
        {/* <Header/> */}
        <HeaderCliente />
        <div>
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/client" element={<ClientHome/>} />
          </Routes>
        </div>
        <Footer/>
      </div>

    </Router>
  )
}


export default Client