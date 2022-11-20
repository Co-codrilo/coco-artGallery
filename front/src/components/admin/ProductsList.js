import React, { Fragment, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import AdminMenu from './AdminMenu' /* Is Sidebar */

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getAdminProducts } from '../../actions/productActions'
import { Link } from "react-router-dom"

const ProductsList = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error])

  const setProducts = () => {
    const data = {
      columns: [
        {
          label: 'Nombre',
          field: 'nombre',
          sort: 'asc'
        },
        {
          label: 'Precio',
          field: 'precio',
          sort: 'asc'
        },
        {
          label: 'Inventario',
          field: 'inventario',
          sort: 'asc'
        },
        {
          label: 'Vendedor',
          field: 'vendedor',
          sort: 'asc'
        },
        {
          label: 'Acciones',
          field: 'actions',
        },
      ],
      rows: []
    }

    products.forEach(product => {
      data.rows.push({
        nombre: product.nombre,
        precio: `$${product.precio}`,
        inventario: product.inventario,
        vendedor: product.vendedor,
        actions: <Fragment>
          <div className='d-flex justify-content-center'>
            <Link to={`/producto/${product._id}`} className="btn btn-outline-primary py-1 px-2">
              <i className="fa fa-eye"></i>
            </Link><Link to="/" className="btn btn-warning py-1 px-2 mx-3">
              <i className="fa fa-pencil"></i>
            </Link>

            <Link to="/" className="btn btn-outline-danger py-1 px-2">
              <i className="bi bi-trash"></i>
            </Link>
          </div>


        </Fragment>
      })
    })

    return data;
  }

  return (
    <Fragment>
      <MetaData title={'All Products'} />
      <div className="row p-3">
        <div className="col-12 col-md-2">
          <AdminMenu />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h3 className="my-5">Productos Registrados</h3>

            {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
              <MDBDataTable
                data={setProducts()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}

          </Fragment>
        </div>
      </div>

    </Fragment>
  )
}
export default ProductsList
