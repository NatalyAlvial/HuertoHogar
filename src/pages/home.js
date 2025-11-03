import React from "react";
import NavBar from "../components/navbar";          // navbar.js
import Banner from "../components/banner";          // banner.js
import ProductosDestacados from "../components/remark_products"; // remark_products.js

function HomePrincipal() {
  return (
    <div>
      <NavBar />
      <Banner />
      <ProductosDestacados />
    </div>
  );
}

export default HomePrincipal;
