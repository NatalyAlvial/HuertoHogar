import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/productoss")
      .then((res) => {
        console.log("DATA API:", res.data);

        // Garantizar que sea un array
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.productos)
          ? res.data.productos
          : [];

        setProductos(data);
      })
      .catch((err) => {
        console.error("ERROR API:", err);
        setProductos([]);
      });
  }, []);

  // ---- CÁLCULOS ----
  const totalProductos = productos.length;

  const sumaPrecios = productos.reduce(
    (acc, p) => acc + Number(p.precio || 0),
    0
  );

  const precioPromedio =
    totalProductos > 0 ? Math.round(sumaPrecios / totalProductos) : 0;

  return (
    <AdminLayout>
      <h2 className="mb-3">
        <i className="fas fa-boxes mr-2"></i> Gestión de Productos
      </h2>

      {/* TARJETAS */}
      <div className="row mb-4">

        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{totalProductos}</h3>
              <p>Total Productos</p>
            </div>
            <div className="icon">
              <i className="fas fa-boxes"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>${sumaPrecios.toLocaleString()}</h3>
              <p>Suma Total de Precios</p>
            </div>
            <div className="icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>${precioPromedio.toLocaleString()}</h3>
              <p>Precio Promedio</p>
            </div>
            <div className="icon">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* TABLA */}
      <div className="card">
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.categoria}</td>
                  <td>${Number(p.precio).toLocaleString()}</td>
                  <td>
                    <Link
                      to={`/admin/producto/${p.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
