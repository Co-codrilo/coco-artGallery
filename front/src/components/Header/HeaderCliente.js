import React from 'react'
import Logo from './Logo'
import PerfilClient from './PerfilClient'

const HeaderCliente = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="logo-nav">
          <Logo />
        </div>
        <menu className="menu search-container">
          <form >
            <input type="search" placeholder="¿Qué producto busca?" name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </menu>
        <div className="perfil-nav">
          <PerfilClient />
        </div>
      </nav>
    </header>
  )
}

export default HeaderCliente