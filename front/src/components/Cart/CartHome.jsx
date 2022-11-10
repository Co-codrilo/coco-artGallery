import React from 'react'
import MetaData from '../layout/MetaData';

let productsCart = [
  {
    id: "6359d274cfb6c36761883f21",
    amount: 1,
    "path-image": "./images/productos/mona_lisa.jpg",
    title: "Mona Lisa",
    price: 10000000
  },
  {
    id: "6359d4e6cfb6c36761883f2f",
    amount: 1,
    "path-image": "./images/productos/guernica.jpg",
    title: "Guernica",
    price: 10000000
  },
  {
    id: "6359d5cdcfb6c36761883f36",
    amount: 1,
    "path-image": "./images/productos/la_joven_de_la_perla.jpg",
    title: "La joven de la perla",
    price: 10000000
  }
]

const CartHome = () => {
  return (
    <main className='card-cart'>
      <MetaData title={'Your Cart'} />
      {/* <div className='registro'> */}
      <div className='registro-form-container-cart'>
        <form action="/" className="registro-form-cart">
        <h4 className="my-3">Su Carrito: <b>{productsCart.length} items</b></h4>

          <section className='registro-fields-cart '>

            <table className="myTable shadow-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Cantidad</th>
                  <th>Obra</th>
                  <th>Valor</th>
                  <th>Total</th>
                  <th></th>
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
                      <td>${productCart.price}</td>
                      <td>${totalProduct}</td>
                      <td className='text-center'><i className='bi bi-trash btn btn-outline-danger'/></td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td>$30000000</td>
                <td>
                  {/* {totalProduct} */}
                </td>
              </tfoot>
            </table>

          </section>

          <div className='button-cart'>
            <button type="submit" className="registro-button-cart comprar">Finalizar compra</button>
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