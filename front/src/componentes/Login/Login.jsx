import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="form-container">
          <div className="header-form">
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>

          <form action="/" className="form">
            <label for="email" className="label">Usuario</label>
            <input type="text" id="email" placeholder="usuario@ejemplo.com" className="input input-email" />

            <label for="password" className="label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />

            <input type="submit" value="Login" className="primary-button login-button" />
          </form>

          <div className="footer-form">
            Arte de <span>Cocodrilos</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login