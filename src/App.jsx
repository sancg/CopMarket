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
import GridProducts from './components/Layout/GridProducts';
import Layout from './components/Layout/Layout';
import About from './pages/sobre-nosotros';

const requested = async ({ params, request }) => {
  console.log({ params, request });
  return request.redirect('/');
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route
          path="/search/:store"
          // loader={() => {}}
          action={requested}
          element={<Store />}
          errorElement={
            <div className="mx-6">Mi amigo me dijo que la app se descoloco 🕵🏻‍♂️</div>
          }
        >
          {/* <Route path="products" element={<GridProducts />} /> */}
        </Route>
        <Route path="about" element={<About />} />
        <Route path="compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
