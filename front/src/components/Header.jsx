import React from 'react'
import Logo from './Header/Logo'
import Perfil from './Header/Perfil'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <div className="logo-nav">
        <Logo/>
        </div>
        <menu className="menu">
          <a href="http://localhost:3000/" className="ventas">Ventas</a>
          <a href="http://localhost:3000/" className="ventas">Usuarios</a>
          <a href="http://localhost:3000/" className="ventas">Productos</a>
        </menu>
        <div className="perfil-nav">
        <Perfil/>
        </div>
      </nav>
    </header>
  )
}

export default Header