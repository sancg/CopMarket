import React from 'react';

export const Product = ({ vendors: { vendor: vendor, products } }) => {
  console.log({ vendor, products });
  return (
    <div className='flex justify-center items-center  flex-col sm:flex-row sm:gap-2'>
      <div className='flex flex-col items-center'>
        <figure className='w-48 sm:w-auto'>
          <img
            className='rounded-lg p-4 shadow-md sm:shadow-lg sm:w-[400px]'
            src={products[0].results[0].img}
            alt='product img'
            srcset=''
          />
        </figure>
        <div className='p-2 text-center order-[-1] sm:order-1'>
          <p className='text-sm'>Ultima actializacion</p>
          <p className='text-xs'>2023-11-04 12:30pm</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 p-3 grow-0 w-2/3 sm:w-auto'>
        <p>{vendor}</p>
        <p className='text-md text-cyan-900 sm:text-2xl'>{products[0].results[0].title}</p>
        <p className='text-sm text-white bg-cyan-900 rounded-lg px-2 py-1 sm:text-md'>
          {products[0].results[0].price}
        </p>
      </div>
    </div>
  );
};
