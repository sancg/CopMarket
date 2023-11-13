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
import GridProducts from './pages/Layout/GridProducts';
import Layout from './pages/Layout/Layout';

const requested = async ({ params, request }) => {
  console.log({ params, request });
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="/search/:store" element={<Store />}>
          <Route path="products" action={requested} element={<GridProducts />} />
        </Route>
        <Route path="compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
