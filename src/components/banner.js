import React from 'react';

function Banner() {
  return (
    <div className='row mt-4'>

      <div className='col-lg-6'>
        <img
          src='https://img.freepik.com/vector-premium/cartel-que-dice-comida-tienda-cartel-que-dijo-comida_1205884-3029.jpg'
          alt='banner'
          style={{ width: '50%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>

      <div className='col-lg-6'>
        <h3> Huerto Hogar</h3>
        <p> Proporcionamos productos frescos y de calidad directamente desde el campo hasta la puerta de nuestros clientes, fomentando prácticas agrícolas sostenibles y una alimentación saludable.</p>
        <h3> Misión </h3>
        <p> Proporcionar productos frescos y de calidad directamente desde el campo hasta la puerta de nuestros clientes, fomentando prácticas agrícolas sostenibles y una alimentación saludable. </p>

        <h3> Visión </h3>
        <p> Ser la tienda online líder en la distribución de productos frescos y naturales en Chile, reconocida por nuestra calidad, servicio y compromiso con la sostenibilidad. </p>
        <img
          src='https://st3.depositphotos.com/1027198/18130/i/950/depositphotos_181302214-stock-photo-close-view-assorted-health-food.jpg'
          alt='frutas y verduras'
          style={{ width: '50%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />

      </div>

    </div>
  );
}

export default Banner;
