import React, { useRef} from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  
  //Navegación para ir a la pagina de registro
  const goToRegister = () =>{
    navigate("/registro");
  }

  //Validacion de prueba del login 
  const form = useRef(null);
  const authLogin = (event) =>{
    event.preventDefault();
    const formData = new FormData(form.current);

    //Toma los datos del formulario
    let email = formData.get("email");
    let password = formData.get("password");

    if(email === "admin@coco.co" && password === "admin"){
      navigate("/")
    }else{
      navigate("/client")
    }

  }

  return (
    <>
      <div className="login">
        <div className="login-form-container">
          <div className="logo-login">
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>

          <form action="/" className="login-form" ref={form}>
            <label htmlFor="email" className="label">Usuario</label>
            <input type="text" name="email" id="email" placeholder="usuario@ejemplo.com" className="login-input" />

            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="*********" className="login-input" />
            <span className='error-message-form'>Error: </span>

            <input type="submit" value="Login" className="login-button" onClick={authLogin}/>
          </form>
          
          <span className='login-register'>¿Necesitas una cuenta? <a onClick={goToRegister}>Registrarse</a></span>

          <div className="footer-login-form">
            <p>Arte de <span>Cocodrilos</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login