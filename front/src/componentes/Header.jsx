import React from 'react'
import Logo from './Header/Logo'
import Perfil from './Header/Perfil'

const Header = () => {
  return (
    <header>
      {/* <div className="header-perfil">
        <Logo/>
        <Perfil/>
      </div> */}
      <nav className='nav'>
        <div className="logo-nav">
        <Logo/>
        </div>
        <menu className="menu">
          <a href="" className="ventas">Ventas</a>
          <a href="" className="ventas">Usuarios</a>
          <a href="" className="ventas">Productos</a>
        </menu>
        <div className="perfil-nav">
        <Perfil/>
        </div>
      </nav>
    </header>
  )
}

export default Header