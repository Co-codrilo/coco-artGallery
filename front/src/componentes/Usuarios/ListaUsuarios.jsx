import React from 'react'
import Footer from '../Footer';
import Header from './../Header';
import HeaderPerfil from './../Header/Header_perfil';
import TablaUsuarios from './TabUsuarios';








        
const ListaUsuarios = () => {
    return (
      <div className='app'>
          <HeaderPerfil />
          <Header />
          <TablaUsuarios />
          <Footer />
      </div>
    )
  }
  
  export default ListaUsuarios