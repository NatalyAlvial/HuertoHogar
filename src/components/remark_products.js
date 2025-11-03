import React from "react";
import CardProducto from "./card_products";

function ProductosDestacados() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Productos Destacados</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Manzanas Fuji"
            descripcion="Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres."
            precio={1200}
            stock="150 kilos"
            categoria="Frutas Frescas"
            imagen="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Naranjas Valencia"
            descripcion="Jugosas y ricas en vitamina C, ideales para zumos frescos y refrescantes."
            precio={1000}
            stock="200 kilos"
            categoria="Frutas Frescas"
            imagen="https://tse2.mm.bing.net/th/id/OIP.B_VI88q4FYIniFSwBomn3AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Plátanos Cavendish"
            descripcion="Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Ricos en potasio y vitaminas."
            precio={800}
            stock="250 kilos"
            categoria="Frutas Frescas"
            imagen="https://tse2.mm.bing.net/th/id/OIP.yXR7XJsZdn96a_-L2hSRvwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Zanahorias Orgánicas"
            descripcion="Zanahorias crujientes cultivadas sin pesticidas. Fuente de vitamina A y fibra, ideales para ensaladas y jugos."
            precio={900}
            stock="100 kilos"
            categoria="Verduras Orgánicas"
            imagen="https://tse4.mm.bing.net/th/id/OIP.Bdp0ZdHtxz6rgQUQlmK8lQHaG4?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Espinacas Frescas"
            descripcion="Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes."
            precio={700}
            stock="80 bolsas (500g)"
            categoria="Verduras Orgánicas"
            imagen="https://tse4.mm.bing.net/th/id/OIP.l32OD-Fhmi-izfAIR063xQHaEp?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Pimientos Tricolores"
            descripcion="Pimientos rojos, amarillos y verdes, ricos en antioxidantes y vitaminas. Ideales para salteados."
            precio={1500}
            stock="120 kilos"
            categoria="Verduras Orgánicas"
            imagen="https://tse1.mm.bing.net/th/id/OIP.tj2GxjoLiVSrAKhuUrwkSAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Miel Orgánica"
            descripcion="Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable."
            precio={5000}
            stock="50 frascos (500g)"
            categoria="Productos Orgánicos"
            imagen="https://tse1.mm.bing.net/th/id/OIP.ncn2FNiCKuogI-OFllLw4wHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Quinua Orgánica"
            descripcion="Grano andino de alto valor nutricional, ideal para ensaladas y comidas saludables."
            precio={3500}
            stock="70 paquetes (1kg)"
            categoria="Productos Orgánicos"
            imagen="https://th.bing.com/th/id/R.db92873c9b2937564c2019d311573c74?rik=34RSraiNXScDgg&pid=ImgRaw&r=0"
          />
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <CardProducto
            titulo="Leche Entera"
            descripcion="Leche entera fresca proveniente de granjas locales. Rica en calcio y perfecta para toda la familia."
            precio={1200}
            stock="90 litros"
            categoria="Productos Lácteos"
            imagen="https://gestionagroganadera.com/wp-content/uploads/2021/02/Leche-entera-2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductosDestacados;

