import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Header_perfil from './Header/Header_perfil';
import Home from './Home';
/* import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Header_perfil from './componentes/Header/Header_perfil';
import Home from './componentes/Home'; */


function App() {
  return (      
        <div className="App">
          <Header_perfil/>
          <Header />
          <Home />
          <Footer />
        </div>
  );
}

export default App;
