import React from 'react'
import ClientHome from './ClientHome'
import Footer from './Footer'
import HeaderCliente from './Header/HeaderCliente'
import HeaderPerfil from './Header/Header_perfil'

const Client = () => {
  return (
    <div className='App'>
      <HeaderPerfil/>
      <HeaderCliente/>
      <ClientHome/>
      <Footer/>
    </div>
  )
}

export default Client