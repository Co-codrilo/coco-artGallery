import React from 'react'
import Footer from '../Footer';
import Header from './../Header';
import HeaderPerfil from './../Header/Header_perfil';
import TablaPedidos from './TablaPedidos';




const ListaPedidos = () => {
    return (
      <div className='app'>
          <HeaderPerfil />
          <Header />
          <TablaPedidos/>
          <Footer />
      </div>
    )
  }
  
  export default ListaPedidos