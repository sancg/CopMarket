import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const LayoutHome = () => {
  return (
    <>
      <section className="marcas">
        <div className="marcas__container">
          <div className="encabezado">
            <h2 className="font-Montserrat font-bold">Fácil y cómodo</h2>
            <p>Empieza seleccionando uno de los mercado pradeños </p>
            <p>para buscar y comparar productos</p>
          </div>
          <div className="imagenes">
            <Link to="/vaquita" className="shadow-lg right-3 rounded-full">
              <img src="/imagenes/vaquita.jpg" alt="vaquita" />
            </Link>
            <Link to="/d1" className="shadow-lg right-3 rounded-full">
              <img src="/imagenes/D1.jpg" alt="d1" className="img2" />
            </Link>
            <Link to="/isimo" className="shadow-lg right-3 rounded-full">
              <img src="/imagenes/Ísimo.jpg" alt="isimo" />
            </Link>
            <Link to="/mercaprado" className="shadow-lg right-3 rounded-full">
              <img src="/imagenes/Mercaprado.jpg" alt="mercaprado" />
            </Link>
            <Link to="/maxioferta" className="shadow-lg right-3 rounded-full">
              <img src="/imagenes/Maxioferta.jpg" alt="oferta" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutHome;
