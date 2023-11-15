import SearchBar from '../components/SearchBar';
import GridProducts from '../components/Layout/GridProducts';
import { useLoaderData, useParams } from 'react-router-dom';

const Store = () => {
  const { store } = useParams();
  const dummyData = useLoaderData();
  return (
    <>
      <SearchBar vendor={store} />
      <GridProducts products={dummyData[0].products} vendor={store} />
    </>
  );
};

export default Store;
