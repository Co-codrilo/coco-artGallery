import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-form-container">
          <div className="logo-login">
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>

          <form action="/" className="login-form">
            <label for="email" className="label">Usuario</label>
            <input type="text" id="email" placeholder="usuario@ejemplo.com" className="login-input" />

            <label for="password" className="label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="login-input" />

            <input type="submit" value="Login" className="login-button" />
          </form>

          <div className="footer-login-form">
            <p>Arte de <span>Cocodrilos</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login