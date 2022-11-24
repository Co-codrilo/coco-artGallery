import React, { useEffect } from 'react'
import HeaderPerfil from "./components/Header/Header_perfil";
/* import Header from './Header'; */
import HeaderCliente from './components/Header/HeaderCliente';
/* import Home from './Home'; */
import ClientHome from "./components/ClientHome";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/products/ProductDetails';
/* import Cart from './components/Cart'; */
import Cart from './components/Cart/Cart';
import Compras from './components/Cart/CartHome'
import Dashboard from './components/admin/Dashboard';
/* import Registro from '../components/Registro/Registro.jsx' */
/* import Login from '../components/Login/Login.jsx' */
import Login from './components/user/Login'

import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/NewProduct';

import { Register } from "./components/user/Register";
import { loadUser } from './actions/userActions';
import store from './store'
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from './components/user/ForgotPassword';
import { NewPassword } from './components/user/NewPassword';
import { UpdateProduct } from './components/admin/UpdateProduct';
import { Shipping } from './components/Cart/Shipping';
import { ConfirmOrder } from './components/Cart/ConfirmOrder';
import { Payment } from './components/Cart/Payment';
import { Success } from './components/Cart/Success'
import { ListOrder } from './components/order/ListOrder';
import { OrderDetails } from './components/order/OrderDetails';
import { useSelector } from 'react-redux';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  const {user, isAuthenticated, loading} = useSelector(state => state.auth)

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
            <Route path='/yo/update' element={<UpdateProfile />} />
            <Route path='/password/update' element={<UpdatePassword />} />
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<NewPassword />} />


            <Route path='/producto/:id' element={<ProductDetails />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
            <Route path="/carrito" element={< Cart />} />
            <Route path='/compras' element={<Compras />} />

            <Route path='/ListaProductos' element={<ProductsList />} />
            <Route path='/nuevoProducto' element={<NewProduct />} />

            <Route path='/search/:keyword' element={<ClientHome />} />


            {/* ------- Rutas protegidas ------- */}
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
            {/* ------- Rutas protegidas ------- */}

          </Routes>
        </div>
        {!loading && (!isAuthenticated || user.role!=="admin") &&(
        <Footer />
       )}
      </div>
    </Router>
  );
}

export default App

