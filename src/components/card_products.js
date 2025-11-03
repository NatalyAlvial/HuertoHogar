import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto(props) {
  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img
        variant="top"
        src={props.imagen}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <p><strong>Precio:</strong> ${props.precio.toLocaleString()} CLP</p>
        <p><strong>Stock:</strong> {props.stock}</p>
        <p><em>{props.categoria}</em></p>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
