import React from 'react'

const Registro = () => {
    return (
        <div className='registro'>
            <div className='registro-form-container'>
                <div className = 'logo-registro'>
                    <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                    <span>Cocodrilos</span>
                </div> 
                <form action="/" className="registro-form">
                    <h1>Registro de usuario</h1>
                    <div className='registro-fields'>
                        <div className='registro-field'>
                            <label for='nombre'>Nombre:</label>
                            <input type='text' id='nombre'></input>  
                        </div>
                        <div className='registro-field'>
                            <label for='email'>Email:</label>
                            <input type='text' id='email'></input>
                        </div>
                        <div className='registro-field'>
                            <label for='apellido'>Apellido:</label>
                            <input type='text' id='apellido'></input>
                        </div>
                        <div className='registro-field'>
                            <label for='password'>Contraseña:</label>
                            <input type='password' id='password'></input>
                        </div>
                    </div>
                    <input type="submit" value="Registrarse" className="registro-button" /> 
                    <div className="footer-login-form">
                        <p>Arte de <span>Cocodrilos</span></p>
                    </div>    
                </form>
            </div>
        </div>
    )
}

export default Registro