import React from 'react'
import { Link } from 'react-router-dom'

const PerfilClient = () => {
  return (
    <div className="perfil ">
        <div className='dropdown perfil-usuario'>
          <Link to={'#!'} className='btn dropdown-toggle d-flex align-items-center' type='button' id='dropDownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <h5 className='align-self-end me-3'>Login</h5>
            <span className='bi bi-person fa-2x'></span>
          </Link>
          <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
            <Link to='/login' className='dropdown-item'>Inicio sesión</Link>
            <Link to='/dashboard' className='dropdown-item'>Administrador</Link>
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