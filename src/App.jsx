import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Compare from './components/Compare';
import GridProducts from './pages/Layout/GridProducts';
import LayoutNavigation from './pages/Layout/Navigation';

const requested = async ({ params, request }) => {
  console.log({ params, request });
};

const App = () => {
  return (
    <div className="relative h-[100dvh] bg-slate-300/10 overflow-x-hidden">
      <LayoutNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/:store" element={<Store />}>
          <Route path="products" action={requested} element={<GridProducts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
