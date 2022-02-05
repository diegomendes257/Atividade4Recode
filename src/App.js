import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./views/home";
import Destinos from "./views/destinos";
import Promocoes from "./views/promocoes";
import Contato from "./views/contato";
import Header from "./components/Header";
import Footer from "./components/footer";
import Cards from "./components/Cards";

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destinos" element={<Destinos/>} />
        <Route path="/promocoes" element={<Promocoes/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;