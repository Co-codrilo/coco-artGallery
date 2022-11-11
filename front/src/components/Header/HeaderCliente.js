import React from 'react'
import Logo from './Logo'
import PerfilClient from './PerfilClient'
import Search from './Search'

const HeaderCliente = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="logo-nav">
          <Logo />
        </div>
        {/* Aquí va el campo de búsqueda */}
        <Search />
        <div className="perfil-nav">
          <PerfilClient />
        </div>
      </nav>
    </header>
  )
}

export default HeaderCliente