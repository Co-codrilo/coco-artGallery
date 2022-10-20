import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../componentes/Login/Login';
import AppOld from '../componentes/AppOld';

export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppOld />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
};
