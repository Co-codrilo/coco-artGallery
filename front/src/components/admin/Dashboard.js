import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import AdminMenu from './AdminMenu'
import { Link } from 'react-router-dom'

const dashboard = () => {
  return (
    <Fragment>
      <div className='row p-3'>
        <div className='col-12 col-md-2'>
          <AdminMenu/>
        </div>

        <div className='col-12 col-md-10 pt-4 pe-2'>
          <h3 className='pb-2'>Panel de control</h3>
          <Fragment>
            <MetaData title={'Panel de control'}/>

            <div className="row pr-4">
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Monto Total<br /> <b>$2.000.000</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pr-4">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Productos<br /> <b>123</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Pedidos<br /> <b>34</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Usuarios<br /> <b>12</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Agotados<br /> <b>20</b></div>
                  </div>
                </div>
              </div>
            </div>

          </Fragment>
        </div>
      </div>
    </Fragment>
  )
}

export default dashboard