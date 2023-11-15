import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Form } from 'react-router-dom';
const SearchBar = () => {
  const searchText = React.useRef();
  /**
   * Function that triggers the Backend API
   * @param {React.FormEvent} evt
   */
  const handleSubmit = (evt) => {
    // evt.preventDefault();
    console.log(evt.target);
    console.log(searchText.current.value);
    console.log(window.location.pathname);
  };
  return (
    <Form
      method="get"
      className="flex justify-center items-center gap-1 mx-auto mt-5 w-full px-6 sm:max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="q"
        id="q"
        autoFocus={true}
        autoComplete="false"
        placeholder="Buscar producto"
        className="bg-gray-200/10 shadow-lg p-2 rounded-lg w-[inherit] focus:outline-5 focus:outline-offset-1"
        ref={searchText}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="w-full h-7 text-indigo-500" />
      </button>
    </Form>
  );
};

export default SearchBar;
