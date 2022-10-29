import React from 'react'
import { Link } from 'react-router-dom'

const PerfilClient = () => {
  return (
    <div className="perfil ">
        <div className='bi bi-person fa-2x'></div>
        <Link to={'/cart'}>
          <div className='bi bi-cart fa-2x'></div>
        </Link>
      
    </div>
  )
}

export default PerfilClient