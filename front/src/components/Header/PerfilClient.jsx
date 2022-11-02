import React from 'react'
import { Link } from 'react-router-dom'

const PerfilClient = () => {
  return (
    <div className="perfil ">
        <div className='dropdown perfil-usuario'>
          <Link to={'#!'} className='btn dropdown-toggle' type='button' id='dropDownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <span className='bi bi-person fa-2x'></span>
          </Link>
          <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
            <Link to='/' className='dropdown-item'>Cliente</Link>
            <Link to='admin/dashboard' className='dropdown-item'>Administrador</Link>
            <Link to='/' className='dropdown-item'>Cerrar Sesión</Link>
          </div>

        </div>
        <Link to={'/cart'}>
          <div className='bi bi-cart fa-2x'></div>
        </Link>
      
    </div>
  )
}

export default PerfilClient