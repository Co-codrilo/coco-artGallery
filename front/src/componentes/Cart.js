import React from 'react'
import CartHome from './Cart/CartHome'
import Footer from './Footer'
import HeaderCliente from './Header/HeaderCliente'
import HeaderPerfil from './Header/Header_perfil'

const Cart = () => {
  return (
    <div className='App'>
      <HeaderPerfil/>
      <HeaderCliente/>
      <CartHome/>
      <Footer/>
    </div>
  )
}

export default Cart