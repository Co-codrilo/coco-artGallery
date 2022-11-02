import React from 'react'
import HeaderPerfil from "./Header/Header_perfil";
/* import Header from './Header'; */
import HeaderCliente from './Header/HeaderCliente';
/* import Home from './Home'; */
import ClientHome from "./ClientHome";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './products/ProductDetails';
import Cart from './Cart';
import Dashboard from './admin/Dashboard';
import Registro from '../components/Registro/Registro.jsx'
import Login from '../components/Login/Login.jsx'

const AppOld = () => {

  return (
    <Router>
      <div>
        <HeaderPerfil />
        {/* <Header/> */}
        <HeaderCliente />
        <div>
          <Routes>
            {/* <Route path="/admin" element={<Home/>} /> */}
            <Route path="/" element={<ClientHome />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/producto/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='admin/dashboard' element={<Dashboard/>}/>
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  )
}

export default AppOld

