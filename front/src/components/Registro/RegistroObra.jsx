import React from 'react'

const RegistroObra = () => {
    return (
        <div className='registro'>
            <div className='registro-form-container'>
                <div className = 'logo-registro'>
                    <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                    <span>Cocodrilos</span>
                </div> 
                <form action="/" className="registro-form">
                    <h1>Registro Obra de Arte</h1>
                    <div className='registro-fields'>
                        <div className='registro-field'>
                            <label for='TituloObra'>Titulo de la obra:</label>
                            <input type='text' id='nombre' placeholder='Monalisa'></input>  
                        </div>
                        <div className='registro-field'>
                            <label for='autor'>Autor:</label>
                            <input type='autor' id='autor' placeholder='Picasso'></input>
                        </div>
                        <div className='registro-field'>
                            <label for='date'>Fecha de creación:</label>
                            <input type='date' id='date' placeholder='01/01/2000'></input>
                        </div>
                        <div className='registro-field'>
                            <label for='precio'>Precio:</label>
                            <input type='precio' id='precio' placeholder='300.000 USD'></input>
                        </div>
                        <div className='registro-field'>
                            <label for='categoria'>Categoria:</label>
                            <select type='categoria' id='categoria' placeholder='Arte Contemporaneo'> 
                                <option value="value1">Arte Antiguo</option>
                                <option value="value2">Arte Clasico</option>
                                <option value="value3">Moderno</option>
                                <option value="value4">Abstracto</option>
                                <option value="value5">Arte Contemporaneo</option>
                                <option value="value6" selected>Arte Conceptual</option>
                            </select>
                        </div>
                    </div>
                    <div className='registro-field'>
                            <p>Sube imagen de la obra
                            <input type='file'name='archivo subido' accept='image/png, .jpeg, .jpg, image/gif'></input>
                            <input type="submit" value="Enviar datos"></input>
                            </p>
                    </div>
                    <button type="submit" className="registro-button">Registrar</button> 
                    <div className="footer-registro-form">
                        <p>Arte de <span>Cocodrilos</span></p>
                    </div>    
                </form>
            </div>
        </div>
    )
}

export default RegistroObra