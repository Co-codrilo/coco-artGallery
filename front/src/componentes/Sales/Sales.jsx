import React from 'react'
import Footer from '../Footer';
import Header from './../Header';
import Header_perfil from './../Header/Header_perfil';
import SalesTable from './SalesTable';

const Sales = () => {
  return (
    <div className='app'>
        <Header_perfil />
        <Header />
        <SalesTable />
        <Footer />
    </div>
  )
}

export default Sales