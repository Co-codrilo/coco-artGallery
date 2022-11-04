import React from 'react';

const Envio = () => {
  return (
    <main>
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
                <label className="customradio">
                  <input type="radio" name='useropt'/>
                  <span className="radio-btn"><img src='../images/check.png' />
                  <div className='opt-cont'> 
                      <h5>Estandar</h5>
                      <span>Llega en 6 días</span><br/>
                      <span>5000$</span>
                  </div>
                  </span>
                </label>
              </div>
              <div className="env-ret-opt">
                <label className="customradio">
                  <input type="radio" name='useropt'/>
                  <span className="radio-btn"><img src='../images/check.png' />
                    <div className='opt-cont'> 
                      <h5>Express</h5>
                      <span>Llega en 1 día</span><br/>
                      <span>9000$ </span>
                    </div>
                  </span>
                </label>
              </div>
            </div>
            <div className="env-ret">
              <div>
                <img src='../images/ret.png' />
                <span>Retiro</span>
              </div>
              <div className="env-ret-opt">
                <label className="customradio">
                  <input type="radio" name='useropt'/>
                  <span className="radio-btn"><img src='../images/check.png' />
                  <div className='opt-cont'> 
                      <h5>Bogotá, Carrera 234</h5>
                      <span>Llega hoy</span><br/>
                      <span>2000$</span>
                  </div>
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Envio