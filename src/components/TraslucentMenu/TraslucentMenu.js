import React, { useState } from 'react';
import './TraslucentMenu.scss';

export const TraslucetMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showImages1, setShowImages1] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleRectanguloClick = () => {
    setShowImages(true);

    setTimeout(() => {
      setShowImages(false);
    }, 3500);
  };

  const handleRectangulo1Click = () => {
    setShowImages1(true);

    setTimeout(() => {
      setShowImages1(false);
    }, 3500);
  };

  return (
    <div className='navar-traslucent-styles'>
      <nav className={`mask ${menuVisible ? 'visible' : ''}`}>
        <ul className='menu-list'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <button className='menu-hide-navbar' onClick={toggleMenu}>Menu</button>
      </nav>

      <div className='content'>
        <div className='rectangulo' onClick={handleRectanguloClick}>
          <img
            src="https://previews.123rf.com/images/bsd555/bsd5552006/bsd555200601012/149013731-ingeniero-el%C3%A9ctrico-icono-de-color-rgb-profesional-t%C3%A9cnico-para-mantenimiento-de-maquinaria.jpg"
            alt='Imagen 1'
          />
          <h1>MANTENIMIENTO</h1>
          <h2>Descripción de la Categoría</h2>
        </div>
        <div className='rectangulo1' onClick={handleRectangulo1Click}>
          <img
            src='https://thumbs.dreamstime.com/z/aire-acondicionado-de-refrigeraci%C3%B3n-doodle-icono-dibujado-mano-ilustraci%C3%B3n-sketch-vector-dibujo-azul-garabato-l%C3%ADnea-arte-217753794.jpg?w=768'
            alt='Imagen 2'
          />
          <h1>REFRIGERACIÓN</h1>
          <h2>Descripción de la Categoría</h2>
        </div>
      

        <div className='image-container'>
        {showImages && (
          <>
            <img
              src='https://www.tipos.co/wp-content/uploads/2014/12/mantenimiento-300x295.jpg'
              alt='Imagen 1'
              className='image'/>
             <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52lk-uBXhHANt5jTqlSlFqhF0fAOuoGFU2w&usqp=CAU'
              alt='Imagen 2'
              className='image'/>
            <img
              src='https://cdnebasnet.com/data/cache/opt_png/eshop/masanes/images/products/i/3/5/2/p352/0000-imagen-servicio-correctivo-350x350-1626965403-1400x1400.png'
              alt='Imagen 3'
              className='image'/>
              <p>Mantenimiento 1.1</p></>
        )}
        {showImages1 && (
          <>
            <img
              src='https://steemitimages.com/DQmSz58zoxEjS9fdp5hLXNuEvkpgwJRhGddMwemPrGYQGaA/refrigeracion.png'
              alt='Imagen 4'
              className='image'/>
            <img
              src='https://img.freepik.com/vector-gratis/concepto-abstracto-servicios-aire-acondicionado-refrigeracion_335657-3181.jpg?w=740&t=st=1695759104~exp=1695759704~hmac=8bb5ddbe079057facc52e91b6f5cde9c155ec19f3ce377e7483e255109f640a8'
              alt='Imagen 5'
              className='image'/>
            <img
              src='https://st4.depositphotos.com/17967430/21205/v/450/depositphotos_212050836-stock-illustration-snowflake-sun-symbol-air-conditioning.jpg'
              alt='Imagen 6'
              className='image'/>
              <p>Refrigeración 1.1</p> </>
        )}
        </div>
      </div>
    </div>
  );
};