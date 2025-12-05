import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePrincipal from "./pages/home";
import ProductosPrincipales from "./pages/products";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProductoDetalle from "./admin/AdminProductoDetalle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/productos" element={<ProductosPrincipales />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/producto/:id" element={<AdminProductoDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
