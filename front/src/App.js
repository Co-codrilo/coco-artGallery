import React from 'react';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Header_perfil from './componentes/Header/Header_perfil';

function App() {
  return (
    <div className="App">
      <Header_perfil/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
