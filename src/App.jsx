import { useEffect, useState } from 'react';

import './App.css';
import Compare from './components/Compare';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  // Example of Fetching data
  // const [data, setData] = useState({});
  // useEffect(() => {
  //     fetch('http://localhost:1234/')
  //         .then((data) => {
  //             return data.json();
  //         })
  //         .then((d) => {
  //             console.log(d);
  //             setData(d);
  //         });

  //     return () => {};
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="d1" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
