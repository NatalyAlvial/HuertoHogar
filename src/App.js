import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePrincipal from "./pages/home";
import ProductosPrincipales from "./pages/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/productos" element={<ProductosPrincipales />} />
      </Routes>
    </Router>
  );
}

export default App;
