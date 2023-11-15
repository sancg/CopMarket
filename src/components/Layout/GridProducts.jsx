// import data from '../../../backend/data/vendors.json';
import CardProduct from '../CardProduct';

const GridProducts = (props) => {
  const lastUpdate = '2023-11-13';
  return (
    <>
      <div className="m-6">Última actualización: {lastUpdate}</div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-6 gap-2 grid-flow-dense place-content-center max-w-7xl sm:mx-6 sm:gap-4 xl:mx-auto">
        {props.products ?? 'No hay productos para mostrar'}
      </div>
    </>
  );
};

export default GridProducts;
