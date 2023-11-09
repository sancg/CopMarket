import React from 'react';
import { Outlet } from 'react-router-dom';
import Compare from '../../components/Compare';
import LayoutHome from '../Home';

const Content = () => {
  return (
    <main className="col-start-2">
      <Outlet />
      <LayoutHome />
    </main>
  );
};

export default Content;
