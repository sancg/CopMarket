import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const LayoutHome = () => {
  return (
    <>
      <section className="marcas">
        <div className="marcas__container">
          <div className="encabezado">
            <h2>Fácil y cómodo</h2>
            <p>selecciona dos de los mercados pradeños </p>
            <p>para comparar sus precios:</p>
          </div>
          <div className="imagenes">
            <Link to="/vaquita" className="shadow-lg right-3 rounded-full">
              <img src="../../public/imagenes/vaquita.jpg" alt="vaquita" />
            </Link>
            <Link to="/d1" className="shadow-lg right-3 rounded-full">
              <img src="../public/imagenes/D1.jpg" alt="d1" className="img2" />
            </Link>
            <Link to="/isimo" className="shadow-lg right-3 rounded-full">
              <img src="../public/imagenes/Ísimo.jpg" alt="isimo" />
            </Link>
            <Link to="/mercaprado" className="shadow-lg right-3 rounded-full">
              <img src="../public/imagenes/Mercaprado.jpg" alt="mercaprado" />
            </Link>
            <Link to="/maxioferta" className="shadow-lg right-3 rounded-full">
              <img src="../../public/imagenes/Maxioferta.jpg" alt="oferta" />
            </Link>
          </div>
        </div>

        <div className="comparar">
          <a href="#">vamos a comparar</a>
        </div>
      </section>
    </>
  );
};

export default LayoutHome;
