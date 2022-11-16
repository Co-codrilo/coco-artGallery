import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Profile = () => {

  const { user, loading } = useSelector(state => state.auth)

  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title={"Mi perfil"} />

          <h2 className="mt-5 ml-5">Mi Perfil</h2>
          <div className="row justify-content-around mt-3 user-info">
            <div className="col-12 col-md-3">
              <figure className='avatar avatar-profile'>
                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.nombre} />
              </figure>
              <Link to="/yo/update" id="edit_profile" className="btn btn-primary btn-block my-5 col-6">
                Editar Perfil
              </Link>
            </div>

            <div className="col-12 col-md-5">
              
              <h5>Nombre Completo</h5>
              <p>{user.nombre}</p>

              <h5>Email</h5>
              <p>{user.email}</p>

              <h5>Teléfono</h5>
              <p>{user.phone}</p>

              <h5>Email</h5>
              <p>{user.email}</p>

              <h5>Dirección</h5>
              <p>{user.address}</p>

              <h5>Cumpleaños</h5>
              <p>{user.birthday}</p>

              <h5>Registrado el: </h5>
              <p>{String(user.fechaRegistro).substring(0, 10)}</p>

              {user.role !== 'admin' && (

                <Link to="/orders/me" className="btn btn-danger btn-block mt-5 col-6">
                  Mis Pedidos
                </Link>
              )}

              <Link to="/password/update" className="btn btn-primary btn-block mt-3 col-6">
                Cambiar contraseña
              </Link>
            </div>
          </div>

        </Fragment>
      )}
    </Fragment>
  )
}
