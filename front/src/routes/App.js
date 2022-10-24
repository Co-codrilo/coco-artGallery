import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../componentes/Login/Login';
import AppOld from '../componentes/AppOld';
import Registro from '../componentes/Registro/Registro'
import Sales from './../componentes/Sales/Sales';

export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppOld />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/ventas" element={<Sales/>} />
            </Routes>
        </BrowserRouter>
    )
};
