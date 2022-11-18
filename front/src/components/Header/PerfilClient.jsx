import React from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions';

const PerfilClient = () => {
  const { cartItems } = useSelector(state => state.cart)
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("LogOut exitoso")
  }
  return (
    <div className="perfil ">

      {user ? (
        <div className='dropdown perfil-usuario d-flex align-items-center'>
      <Link to={'/compras'}> {/* /compras or /carrito */}
        <div className='d-flex align-items-center'>
          <i class="bi bi-cart fa-3x text-dark d-flex align-items-center m-1" aria-hidden="false"></i>
          <span className="ml-1 bg-gradient py-2 px-3 text-dark shadow-sm" id="cart_count">{cartItems.length}</span>
        </div>
      </Link>
          <Link to={'#!'} className='btn dropdown-toggle d-flex align-items-center' type='button' id='dropDownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            {/* <h5 className='align-self-end me-3'>Login</h5> */}
            <figure className='user-perfil'>
              <img
                src={user.avatar && user.avatar.url}
                alt={user && user.nombre}
                className='rounded-circle'
              />
            </figure>
            <span>{user && user.nombre}</span>
          </Link>
          <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
            {/*Preguntamos el rol de quien esta online*/}
            {user && user.role === 'admin' && (
              <Link to='/dashboard' className='dropdown-item'>Administrador</Link>
            )}
            <Link to='/' className='dropdown-item'>Pedidos</Link>
            <Link to='/yo' className='dropdown-item'>Mi Perfil</Link>
            <Link to='/' onClick={logoutHandler} className='dropdown-item'>Cerrar Sesión</Link>
          </div>
        </div>
      ) : !loading && <Link to="/login" id="view_btn" className='shadow registro-button'>Login</Link>}
    </div>
  )
}

export default PerfilClient