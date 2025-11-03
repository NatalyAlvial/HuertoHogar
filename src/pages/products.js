import React from "react";
import NavBar from "../components/navbar";          // navbar.js
import ProductosDestacados from "../components/remark_products"; // remark_products.js
import CalculoCompra from "../components/calculoCompra"; // calculoCompra.js

function ProductosPrincipales() {
  return (
    <div>
      <NavBar />
      <ProductosDestacados />
      <CalculoCompra />
    </div>
  );
}

export default ProductosPrincipales;
