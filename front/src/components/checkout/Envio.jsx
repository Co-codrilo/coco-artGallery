import React from 'react';
import Footer from '../Footer';
import Logo from '../Header/Logo';

const Checkout_Header = () => {
  return (
    <header>
      <nav className='nav checkout-nav'>
        <div className='logo-nav checkout-logo'>
          <Logo />
          <span>Cocodrilos Checkout</span>
        </div>
        <div className='menu-nav' />
        <div className='perfil-nav'>
          Perfil
        </div>
        <div className='cart-nav'>
          <a href='/' className='carro-compra'>
            <img src='../images/shopping-cart.png' alt='carrito' />
          </a>
        </div>
      </nav>
    </header>
  )
}

const Envio = () => {
  return (
    <main>
      <Checkout_Header />
      <div className='checkout'>
        <div className="checkout-progress">
          <div className="checkout-step">
            <div className="step-check"></div>
            <span className="step-title">Envio</span>
          </div>
          <div className="checkout-step">
            <div className="step-check"></div>
            <span className="step-title">Pago</span>
          </div>
          <div className="checkout-step">
            <div className="step-check"></div>
            <span className="step-title">Revisión</span>
          </div>
        </div>
        <div className="checkout-form">
          <h2>¿Cómo quieres recibir o retirar tu compra?</h2>
          <p className='cambiardir'>
            <span>Opciones para Bogota, CRA 123</span>
            <a href='/direccion'>
              <span>Cambiar</span>
            </a>
          </p>
          <hr />
          <form className='env-ret-form'>
            <div className="env-ret">
              <div>
                <img src='../images/env.png' />
                <span>Envio</span>
              </div>
              <div className="env-ret-opt">
                <input type="radio" />
                <h5>Estandar</h5>
                <span>$5000</span>
              </div>
              <div className="env-ret-opt">
                <input type="radio" />
                <h5>Express</h5>
                <span>$15000</span>
              </div>
            </div>
            <div className="env-ret">
              <div>
                <img src='../images/ret.png' />
                <span>Retiro</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
