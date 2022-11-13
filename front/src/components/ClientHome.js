import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useParams, Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export const Home = () => {
  const params = useParams();
  const keyword = params.keyword;
  const [precio, setPrecio] = useState([100000, 10000000])
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProducts(currentPage, keyword, precio));
  }, [dispatch, alert, error, currentPage, keyword, precio])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }


  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Tu mejor galería"></MetaData>

          <div className='home-container'>
            <h1 id="encabezado_productos">Galería</h1>
            
            {/* Filtro Precio */}
            <div className='d-flex justify-content-center mb-5 mt-3 px-5'>
              <div className='col-6'>
                <Slider
                  range
                  className='t-slider'
                  marks={{
                    100000: `$100000`,
                    10000000: `$10000000`
                  }}
                  min={100000}
                  max={10000000}
                  defaultValue={[100000, 10000000]}
                  tipFormatter={value => `$${value}`}
                  tipProps={{
                    placement: 'top',
                    prefixCls: 'rc-slider-tooltip',
                    viseble: true
                  }}
                  value={precio}
                  onChange={precio => setPrecio(precio)}
                />
              </div>
            </div>
            {/* Filtro Precio */}


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

          <div className='d-flex justify-content-center mt-5'>
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
          </div>

        </Fragment>
      )}
    </Fragment>
  )
}
export default Home