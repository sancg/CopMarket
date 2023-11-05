import { Product } from './product';
import './App.css';

import data from '../backend/data/vendors.json';
function App() {
  // TODO: Devolver una tienda en concreto, despues de seleccionar en cual buscar.
  const [d1, comp] = data;
  // console.log(d1);
  return (
    <main>
      <section className='grid place-content-center grid-cols-1 h-screen sm:grid-cols-2 sm:gap-2 sm:m-5'>
        <Product vendors={{ ...d1 }} />
        <Product vendors={comp} />
      </section>
    </main>
  );
}

export default App;
