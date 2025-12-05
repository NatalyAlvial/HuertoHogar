import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { useParams, Link } from "react-router-dom";

export default function AdminProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get("/api/productos.json").then((res) => {
      // IDs ahora son cadenas (FR001, VR001, etc.)
      const item = res.data.find((x) => x.id === id);
      setProducto(item);
    });
  }, [id]);

  if (!producto)
    return (
      <AdminLayout>
        <h3>Cargando...</h3>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <h2 className="mb-3">
        <i className="fas fa-box mr-2"></i> Detalle del Producto
      </h2>

      <div className="card mt-3">

        {/* --------- Imagen pequeña y centrada --------- */}
        <div className="text-center p-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid"
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              border: "2px solid #28a745",
              borderRadius: "10px"
            }}
          />
        </div>

        {/* --------- Información del producto --------- */}
        <div className="card-body">
          <p><strong>Código:</strong> {producto.id}</p>
          <p><strong>Nombre:</strong> {producto.nombre}</p>
          <p><strong>Categoría:</strong> {producto.categoria}</p>
          <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
          <p><strong>Stock:</strong> {producto.stock}</p>
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
        </div>

        <div className="card-footer">
          <Link to="/admin" className="btn btn-secondary btn-sm">
            Volver
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
