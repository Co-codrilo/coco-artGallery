import React from 'react'
import Footer from '../Footer';
import Header from './../Header';
import HeaderPerfil from './../Header/Header_perfil';
import SalesTable from './SalesTable';

const Sales = () => {
  return (
    <div className='app'>
        <HeaderPerfil />
        <Header />
        <SalesTable />
        <Footer />
    </div>
  )
}

export default Sales