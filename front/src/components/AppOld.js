/*
import React, { useEffect } from 'react'
import HeaderPerfil from "./Header/Header_perfil";
 import Header from './Header'; 
import HeaderCliente from './Header/HeaderCliente';
 import Home from './Home'; 
import ClientHome from "./ClientHome";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './products/ProductDetails';
 import Cart from './Cart'; 
import Cart from './Cart/Cart';
import Compras from './Cart/CartHome'
import Dashboard from './admin/Dashboard';
 import Registro from '../components/Registro/Registro.jsx' 
 import Login from '../components/Login/Login.jsx' 
import Login from './user/Login'

import ProductsList from './admin/ProductsList';
import NewProduct from './admin/NewProduct';

import { Register } from "./user/Register";
import { loadUser } from '../actions/userActions';
import store from '../store'
import { Profile } from './user/Profile';
import ProtectedRoute from '../routes/ProtectedRoute';
import { UpdateProfile } from './user/UpdateProfile';
import { UpdatePassword } from './user/UpdatePassword';
import { ForgotPassword } from './user/ForgotPassword';
import { NewPassword } from './user/NewPassword';
import { UpdateProduct } from './admin/UpdateProduct';
import { Shipping } from './Cart/Shipping';
import { ConfirmOrder } from './Cart/ConfirmOrder';
import { Payment } from './Cart/Payment';
import { Success } from './Cart/Success'
import { ListOrder } from './order/ListOrder';
import { OrderDetails } from './order/OrderDetails';
import { useSelector } from 'react-redux';

const AppOld = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  const {user, isAuthenticated, loading} = useSelector(state => state.auth)

  return (
    <Router>
      <div>
        <HeaderPerfil />
        { <Header/> }
        <HeaderCliente />
        <div>
          <Routes>
            { <Route path="/admin" element={<Home/>} /> }
            <Route path="/" element={<ClientHome />} />
            <Route path="/home" element={<ClientHome />} />

            { <Route path="/registro" element={<Registro />} /> }
            <Route path='/register' element={<Register />} />
            { <Route path='/login' element={<Login/>}/> }
            <Route path='/login' element={<Login />} />
            <Route path='/yo' element={<Profile />} />
            <Route path='/yo/update' element={<UpdateProfile />} />
            <Route path='/password/update' element={<UpdatePassword />} />
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<NewPassword />} />


            <Route path='/producto/:id' element={<ProductDetails />} />
            { <Route path='/cart' element={<Cart />} /> }
            <Route path="/carrito" element={< Cart />} />
            <Route path='/compras' element={<Compras />} />

            <Route path='/ListaProductos' element={<ProductsList />} />
            <Route path='/nuevoProducto' element={<NewProduct />} />

            <Route path='/search/:keyword' element={<ClientHome />} />


            { ------- Rutas protegidas ------- }
            <Route path='/dashboard'
              element={<ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>}
            />
            <Route path="/updateProduct/:id"
              element={<ProtectedRoute isAdmin={true}>
                <UpdateProduct />
              </ProtectedRoute>}
            />

            <Route path="/shipping"
              element={<ProtectedRoute>
                <Shipping />
              </ProtectedRoute>}
            />

            <Route path="/order/confirm"
              element={<ProtectedRoute>
                <ConfirmOrder />
              </ProtectedRoute>}
            />

            <Route path="/payment"
              element={<ProtectedRoute>
                <Payment />
              </ProtectedRoute>}
            />

            <Route path="/success"
              element={<ProtectedRoute>
                <Success />
              </ProtectedRoute>}
            />

            <Route path="/myOrders"
              element={<ProtectedRoute>
                <ListOrder />
              </ProtectedRoute>}
            />

            <Route path="/order/:id"
              element={<ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>}
            />
            { ------- Rutas protegidas ------- }

          </Routes>
        </div>
        {!loading && (!isAuthenticated || user.role !== "admin") &&(
          <Footer />
        )}
      </div>
    </Router>
  )
}

export default AppOld
*/