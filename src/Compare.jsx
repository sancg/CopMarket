import { Product } from './product';
import data from '../backend/data/vendors.json';

const Compare = () => {
  // TODO: Devolver una tienda en concreto, después de seleccionar en cual buscar.
  const [d1, comp] = data;
  const isCompare = true;
  // console.log(d1);
  return (
    <section
      className={
        !isCompare
          ? 'grid place-content-center grid-cols-1 h-screen sm:m-10'
          : 'grid place-content-center grid-cols-1 h-screen sm:grid-cols-2 sm:gap-2 sm:m-10'
      }
    >
      <Product vendors={{ ...d1 }} />

      {!isCompare || (
        <>
          <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-25 dark:opacity-100 sm:hidden' />
          <Product vendors={comp} />
        </>
      )}
    </section>
  );
};

export default Compare;
