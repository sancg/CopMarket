import { Product } from './Product';
import data from '../../backend/data/vendors.json';

const Compare = () => {
  // TODO: Devolver una tienda en concreto, después de seleccionar en cual buscar.
  const [d1, comp] = data;
  const baseClasses = 'grid place-content-center grid-cols-1 max-w-[1280px] ';
  const isCompare = true;
  // console.log(d1);
  return (
    <section
      className={
        !isCompare
          ? baseClasses
          : baseClasses + 'sm:grid-cols-2 sm:gap-2 sm:m-10 md:mx-auto md:my-0 '
      }
    >
      <Product vendors={d1} />

      {!isCompare || (
        <>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-25 dark:opacity-100 sm:hidden" />
          <Product vendors={comp} />
        </>
      )}
    </section>
  );
};

export default Compare;
