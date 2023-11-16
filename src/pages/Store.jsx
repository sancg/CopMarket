import SearchBar from '../components/SearchBar';
import GridProducts from '../components/Layout/GridProducts';
import { useLoaderData, useParams } from 'react-router-dom';

import cart from '../assets/images/shoppingCart.png';
const Store = () => {
  const { store } = useParams();
  const dummyData = useLoaderData();
  return (
    <>
      <SearchBar vendor={store} />
      {dummyData && typeof dummyData === 'object' ? (
        <GridProducts products={dummyData[0].products} vendor={store} />
      ) : (
        <div className="flex flex-col mx-auto my-5 w-full text-center">
          <p>{dummyData ?? 'No hay productos para mostrar'}</p>
          <img
            className="aspect-square w-60 h-full self-center"
            src={cart}
            alt="Buscar un producto para comparar"
          />
        </div>
      )}
    </>
  );
};

export default Store;
