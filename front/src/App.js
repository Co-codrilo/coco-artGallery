import React from 'react';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Header_perfil from './componentes/Header/Header_perfil';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Header_perfil/>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
  );
}

export default App;
