import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../componentes/Login/Login';
import AppOld from '../componentes/AppOld';
import Registro from '../componentes/Registro/Registro'
import Sales from './../componentes/Sales/Sales';
import Client from '../componentes/Client';
import ListaUsuarios from '../componentes/Usuarios/ListaUsuarios';
import UpdateUsuario from '../componentes/Usuarios/UpdateUsuario';
import ListaPedidos from '../componentes/Usuarios/ListaPedidos';
import DeleteUsuario from '../componentes/Usuarios/DeleteUsuario';


export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AppOld />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/ventas" element={<Sales/>} />
                <Route path='/client' element={<Client/>} />
                <Route path='/ListaUsuarios' element={<ListaUsuarios/>} />
                <Route path='/UpdateUsuario' element={<UpdateUsuario/>} />
                <Route path='/ListaPedidos' element={<ListaPedidos/>} />
                <Route path='/DeleteUsuario' element={<DeleteUsuario/>} />

            </Routes>
        </BrowserRouter>
    )
};
