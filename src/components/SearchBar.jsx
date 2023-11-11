import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
const SearchBar = () => {
  return (
    <form
      action="/"
      method="get"
      className="flex justify-center items-center gap-1 mx-auto my-0 w-full px-6 sm:max-w-2xl"
    >
      <input
        type="text"
        name="q"
        id="q"
        autoFocus="true"
        placeholder="buscar"
        className="bg-gray-200/10 shadow-md p-2 rounded-lg w-[inherit] ring-indigo-400 ring-1"
      />
      <button type="submit">
        <MagnifyingGlassIcon className="w-8 h-10 text-indigo-500" />
      </button>
    </form>
  );
};

export default SearchBar;
