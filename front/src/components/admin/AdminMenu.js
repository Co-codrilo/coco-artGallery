import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <main>
      
      <a class="btn" data-bs-toggle="offcanvas" data-toggle='collapse' aria-expanded='false' href="#adminMenu" role="button" aria-controls="adminMenu"><i class="bi bi-list"></i></a>

      <div className='sidebar-wrapper collapse list-unstyled' id='adminMenu'>
        <nav id='sidebar'>
          <ul className='list-unstyled components'>
            <li className='p-2'>
              <Link to='/'><i className='fa fa-tachometer'></i>Pedidos</Link>
            </li>

            {/* Productos */}
            <li className='p-2'>
              <a href='#productSubmenu' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'><i className='fa fa-product-hunt'>Productos</i></a>
              <ul className='collapse list-unstyled' id='productSubmenu'>
                <li>
                  <Link to='/ListaProductos'><i className='fa fa-clipboard'></i>Lista de productos</Link>
                </li>
                <li>
                  <Link to='/nuevoProducto'><i className='fa fa-plus'></i>Nuevo producto</Link>
                </li>
              </ul>
            </li>
            {/* Productos */}


            {/* Pedidos */}
            <li className='p-2'>
              <Link to='/'><i className='fa fa-list'></i>Lista de pedidos</Link>
            </li>
            {/* Pedidos */}


            {/* Usuarios */}
            <li className='p-2'>
              <Link to='/'><i className='fa fa-users'></i>Lista de usuarios</Link>
            </li>
            {/* Usuarios */}

          </ul>
        </nav>
      </div>
    </main>
  )
}

export default AdminMenu