import React, { useState } from "react";
import { Table } from "react-bootstrap";

function CalculoCompra() {
  const [cantidad, setCantidad] = useState(1);
  const [precioUnitario, setPrecioUnitario] = useState(0);
  const total = cantidad * precioUnitario;

  return (
    <div className="container mt-5">
      <div className="bg-success text-white text-center p-3 rounded">
        <h3>Calcular Total de Compra</h3>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6">
          <label className="form-label">Cantidad</label>
          <input
            className="form-control"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          />
        </div>
        <div className="col-lg-6">
          <label className="form-label">Precio unitario (CLP)</label>
          <input
            className="form-control"
            type="number"
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-4">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td><strong>Total a pagar:</strong></td>
              <td>${total.toLocaleString()} CLP</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CalculoCompra;
