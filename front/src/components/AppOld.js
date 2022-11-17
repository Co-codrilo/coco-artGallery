import React, { useEffect } from 'react'
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
/* import Registro from '../components/Registro/Registro.jsx' */
/* import Login from '../components/Login/Login.jsx' */
import Login from './user/Login'
import ProductsList from './admin/ProductsList';
import NewProduct from './admin/newProduct';
import { Register } from "./user/Register";
import { loadUser } from '../actions/userActions';
import store from '../store'
import { Profile } from './user/Profile';
import ProtectedRoute from '../routes/ProtectedRoute';
import { UpdateProfile } from './user/UpdateProfile';

const AppOld = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

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
            <Route path="/home" element={<ClientHome />} />

            {/* <Route path="/registro" element={<Registro />} /> */}
            <Route path='/register' element={<Register />} />
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='/login' element={<Login />} />
            <Route path='/yo' element={<Profile />} />


            <Route path='/producto/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/ListaProductos' element={<ProductsList />} />
            <Route path='/nuevoProducto' element={<NewProduct />} />
            <Route path='/search/:keyword' element={<ClientHome />} />
            <Route path='/yo/update' element={<UpdateProfile/>} />

            {/* ------- Rutas protegidas ------- */}
            <Route path='/dashboard'
              element={<ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>}
            />
            {/* ------- Rutas protegidas ------- */}
            
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  )
}

export default AppOld

