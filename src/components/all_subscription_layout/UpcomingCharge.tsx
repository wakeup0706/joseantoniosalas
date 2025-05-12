import { Link } from 'react-router-dom';
import { Hands } from "../icons";

const UpcomingCharge = () => {
  return (
    <div className="px-4 sm:px-0 mt-12">
      <div className="max-w-[450px] mx-auto px-8 py-6 bg-gradient-main rounded-2xl mt-8 sm:mt-12 flex flex-col gap-3 items-end justify-center w-full pr-4">
          <p className="text-white font-bold sm:text-[17px] text-[14px]">Cancelar tus suscripciones ahora es más fácil</p>
          <p className="text-white font-bold sm:text-[17px] text-[14px]">con la ayuda de nuestro equipo.</p>

          <button className='rounded-full sm:px-7 px-5 py-1 bg-secondary hover:bg-white text-primary  sm:text-xl text-[14px]'>
            Cancelar Suscripción
          </button>
      </div>

      <div className="flex flex-col sm:flex-row max-w-[460px] gap-3 mx-auto justify-between items-center sm:mt-12 mt-6 text-center">
        <Link to='/' className="text-primary underline">
          Términos y Condiciones
        </Link>
        <Link to='/' className="text-primary underline">
          Políticas de Privacidad
        </Link>
      </div>
    </div>
  );
};

export default UpcomingCharge;
