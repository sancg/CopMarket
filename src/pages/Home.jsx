import './home.css';

import Vendor from '../components/Vendor';
import { stores } from '../utils/constants';
const Home = () => {
  return (
    <>
      <section className="mx-5">
        <div className="flex flex-col justify-center">
          <div className="encabezado text-center text-main-800 sm:m-10">
            <h2 className="font-Montserrat font-bold">Fácil y cómodo</h2>
            <p className="max-w-md">
              Empieza seleccionando uno de los mercado pradeños para buscar y comparar
              productos
            </p>
          </div>
          <div className="relative flex flex-wrap justify-center items-center gap-4">
            {stores.map((s) => {
              return <Vendor key={s.vendor} {...s} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
