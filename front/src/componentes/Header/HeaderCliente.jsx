import React from 'react'
import Logo from './Logo'
import Perfil from './Perfil'

const HeaderCliente = () => {
  return (
    <header>
      <nav className='nav'>
        <div className="logo-nav">
          <Logo />
        </div>
        <menu className="menu search-container">
          <form >
            <input type="search" placeholder="¿Qué producto busca?" name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </menu>
        <div className="perfil-nav">
          <Perfil />
        </div>
      </nav>
    </header>
  )
}

export default HeaderCliente