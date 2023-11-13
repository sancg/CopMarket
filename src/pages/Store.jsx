import React from 'react';
import SearchBar from '../components/SearchBar';
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
};

export default Store;
