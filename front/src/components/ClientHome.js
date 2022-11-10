import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProducts(currentPage));
  }, [dispatch, alert, error, currentPage])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }


  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Tu mejor galería"></MetaData>

          <div className='home-container'>
            <h1 id="encabezado_productos">Galería</h1>

            <section id="/* productos */" className='card-container'>
              {/* <div className='row'> */}
              {products && products.map(producto => (

                <div key={producto._id} className='cards'>
                  {/* <div className=' p-3 rounded'> */}
                  <div className='card-img'>
                    <img className='' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                  </div>
                  <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                      </div>
                      <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                    </div>
                    <p className='card-text'>${producto.precio}</p>
                    <Link to={`/producto/${producto._id}`} id="view_btn" className='/* btn btn-block */ registro-button'>
                      Ver detalle
                    </Link>
                  </div>
                  {/* </div> */}
                </div>

              ))}
              {/* </div> */}
            </section>
          </div>

          {/* <div className='d-flex justify-content-center mt-5'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={'Siguiente'}
              prevPageText={'Anterior'}
              firstPageText={'Primera'}
              lastPageText={'Ultima'}
              itemClass='page-item'
              linkClass='page-link'
            />
          </div> */}

        </Fragment>
      )}
    </Fragment>
  )
}
export default Home