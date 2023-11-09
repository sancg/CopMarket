import React from 'react';
import { Link } from 'react-router-dom';

const LayoutNavigation = () => {
  return (
    <header className="col-span-full">
      <nav className="flex justify-between bg-[#1e3240] text-white px-6 items-center">
        <div className="font-bold text-xl">CopMarket</div>
        <ul className="flex gap-2">
          <li className="p-4 font-semibold">
            <Link to="/">Inicio</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link to="/about">Sobre Nosotros</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LayoutNavigation;
