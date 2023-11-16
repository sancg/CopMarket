import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect
} from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Compare from './components/Compare';
import Layout from './components/Layout/Layout';

import dummyData from '../backend/data/vendors.json';
import { stores } from './utils/constants';

const requested = async ({ params, request }) => {
  console.log({ params, request });
  return request.redirect('/');
};

const loadVendor = async ({ request, params }) => {
  const query = new URL(request.url).searchParams.get('q');
  const supportedStore = !!stores.find((s) => s.vendor === params.store);
  if (!supportedStore) return redirect('/');

  if (typeof query !== 'string') {
    // TODO: Traer datos de Relleno para los correspondientes mercados
    // Esta es la primera carga del componente al entrar a la ruta
    return null; // Initial load
  }

  if (query === '') {
    return 'Primero busque un producto para comparar';
  }

  const store = params?.store.toLowerCase();
  console.log({ store, request, query });
  const _req = await fetch(`http://localhost:1234/vendor/${store}/${query}`);
  const _res = await _req.json();
  return _res;
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/search/:store"
          loader={loadVendor}
          action={requested}
          element={<Store />}
        >
          {/* <Route path="products" element={<GridProducts />} /> */}
        </Route>
        <Route path="compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
