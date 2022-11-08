import React from 'react'
import { Link } from "react-router-dom"; 

const productsCart = [
  {
    id: "5",
    amount: 2,
    "path-image": "./images/obras/merlin-lightpainting2.jpg",
    title: "Ondas",
    price: 400
  },
  {
    id: "11",
    amount: 1,
    "path-image": "./images/obras/break.jpg",
    title: "Ondas",
    price: 400
  },
  {
    id: "16",
    amount: 1,
    "path-image": "./images/obras/darya-sannikov.jpg",
    title: "Ondas",
    price: 400
  }
]

const CartHome = () => {
  return (
    <main className='card-cart'>
      {/* <div className='registro'> */}
      <div className='registro-form-container-cart'>
        <form action="/" className="registro-form-cart">
          <h3>Total Compra</h3>

          <section className='registro-fields-cart '>

            <table className="myTable shadow-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Valor</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {productsCart.map((productCart) => {
                  const totalProduct = (productCart.amount) * (productCart.price);
                  return (
                    <tr key={productCart.id}>
                      <td>
                        <div className='image-container-cart'>
                          <img src={productCart["path-image"]} alt="img" />
                        </div>
                      </td>
                      <td>{productCart.amount}</td>
                      <td>{productCart.title}</td>
                      <td>{productCart.price}USD</td>
                      <td>{totalProduct}USD</td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td>USD</td>
                <td>
                  {/* {totalProduct} */}
                </td>
              </tfoot>
            </table>

          </section>

          <div className='button-cart'>
            <Link to={"/envio"}>
              <button type="submit" className="registro-button-cart comprar">Finalizar compra</button>
            </Link>
            <button type="submit" className="registro-button-cart cancelar ">Cancelar</button>
          </div>

          <div className="footer-registro-form">
            <p>Arte de <span>Cocodrilos</span></p>
          </div>
        </form>
      </div>
      {/* </div> */}

    </main>
  )
}

export default CartHome