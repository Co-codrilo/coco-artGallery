import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'
import MetaData from '../layout/MetaData'

const CartHome = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart)

  const increaseQty = (id, quantity, inventario) => {
    const newQty = quantity + 1;
    if (newQty > inventario) return;
    dispatch(addItemToCart(id, newQty))
  }

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    dispatch(addItemToCart(id, newQty))
  }

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id))
  }
  return (
    <Fragment>
      <main className='card-cart'>
        <MetaData title={'Mi Carrito'} />
        {/* <div className='registro'> */}
        <div className='registro-form-container-cart shadow-sm'>
          <div className='logo-registro'>
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>
          <form action="/" className="registro-form-cart">
            {cartItems.length === 0 ? <h4 className="mt-5">Su carrito esta vacio</h4> : (
              <Fragment>
                {/* <h4 className="my-3">Su Carrito: <b>{productsCart.length} items</b></h4> */}
                <h4 className="mt-5">Su Carrito: <b>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} items</b></h4>

                <section className='registro-fields-cart '>

                  <table className="myTable shadow-sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Cantidad</th>
                        <th>Obra</th>
                        <th>Valor</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {productsCart.map((productCart) => { */}
                      {cartItems && cartItems.map(item => (
                        <Fragment>
                          {/* const totalProduct = (productCart.amount) * (productCart.price);
                      return ( */}
                          <tr key={item.id} >
                            {/* Imagen */}
                            <td>
                              <div className='image-container-cart'>
                                <img src={item.imagen} alt={item.nombre} />
                              </div>
                            </td>
                            {/* Imagen */}

                            {/* Cantidad de productos */}
                            <td className="stockCounter d-flex ">
                              <span className="btn btn-outline-danger minus " onClick={() => decreaseQty(item.product, item.quantity)}>-</span>
                              <input type="number" className="form-control count p-0 w-25 text-center " value={item.quantity} readOnly />
                              <span className="btn btn-outline-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.inventario)}>+</span>
                            </td>
                            {/* Cantidad de productos */}

                            {/* Nombre de productos */}
                            <td>
                              <Link to={`/producto/${item.product}`}>{item.nombre}</Link>
                            </td>
                            {/* Nombre de productos */}

                            {/* Precio */}
                            <td>${item.precio}</td>
                            {/* Precio */}

                            {/* Eliminar producto */}
                            <td><i id="delete_cart_item" className="bi bi-trash btn btn-outline-danger" onClick={() => removeCartItemHandler(item.product)}></i></td>
                            {/* Eliminar producto */}
                          </tr>
                          {/* ) */}
                        </Fragment>
                      ))}
                      {/* })} */}
                    </tbody>
                    <tfoot>
                      <td>Total</td>
                      <td colspan="2"><span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} (Unidades)</span></td>
                      <td>
                        <span className="order-summary-values">${cartItems.reduce((acc, item) => acc + (item.quantity * item.precio), 0).toFixed(2)}</span>
                      </td>
                      <td></td>
                    </tfoot>
                  </table>

                </section>
                <div className='button-cart'>
                  <button type="submit" className="registro-button-cart comprar mt-5">Comprar</button>
                </div>

              </Fragment>
            )}
            <div className="footer-registro-form mt-4">
              <p>Arte de <span>Cocodrilos</span></p>
            </div>
          </form>
        </div>
        {/* </div> */}

      </main>

    </Fragment>
  )
}

export default CartHome