import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Compare from './components/Compare';
import Layout from './components/Layout/Layout';

import dummyData from '../backend/data/vendors.json';

const requested = async ({ params, request }) => {
  console.log({ params, request });
  return request.redirect('/');
};

const loadVendor = async ({ request, params }) => {
  const query = new URL(request.url).searchParams.get('q');
  if (typeof query !== 'string') {
    // TODO: Traer datos de Relleno para los correspondientes mercados
    return null; // Initial load
  }

  if (query === '') {
    return 'Primero busque un producto para comparar';
  }

  console.log({ params, request, query });
  return dummyData;
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
          // errorElement={
          //   <div className="mx-6">Mi amigo me dijo que la app se descoloco 🕵🏻‍♂️</div>
          // }
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
