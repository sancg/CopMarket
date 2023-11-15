import { useParams } from 'react-router-dom';
import CardProduct from '../CardProduct';

const GridProducts = (props) => {
  const { products, vendor } = props;

  const lastUpdate = '2023-11-13';
  return (
    <>
      {products ? (
        <>
          <div className="m-6">Última actualización: {lastUpdate}</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-6 gap-2 grid-flow-dense place-content-center max-w-7xl sm:mx-6 sm:gap-4 xl:mx-auto">
            {products.map((p) => (
              <CardProduct key={p.title + p.price} product={p} vendor={vendor.toUpperCase()} />
            ))}
          </div>
        </>
      ) : (
        <div className="m-6">No hay productos para mostrar</div>
      )}
    </>
  );
};

export default GridProducts;
