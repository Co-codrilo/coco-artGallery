import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import AppOld from '../componentes/AppOld'; */
import Client from '../components/Client';
/* import { ProductDetails } from '../components/products/ProductDetails'; */
import Registro from '../components/Registro/Registro.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AppOld />} />
        <Route path="/admin" element={<AppOld />} />
        <Route path="/producto/:id" element={<ProductDetails />} />
        <Route path='/client' element={<Client />}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ventas" element={<Sales />} />
        <Route path='/client' element={<Client />} />
        <Route path='/ListaUsuarios' element={<ListaUsuarios />} />
        <Route path='/UpdateUsuario' element={<UpdateUsuario />} />
        <Route path='/ListaPedidos' element={<ListaPedidos />} />
        <Route path='/DeleteUsuario' element={<DeleteUsuario />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/envio' element={<Envio />} />
      </Routes>
    </BrowserRouter>
  )
};