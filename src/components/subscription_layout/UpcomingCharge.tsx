import { Link } from 'react-router-dom';
import { Hands } from "../icons";

const UpcomingCharge = () => {
  return (
    <div className="px-4 sm:px-0 mt-12">
      <div className="flex justify-between">
        <p className="text-primary font-bold text-xl">Total próximos cobros</p>
        <p className="text-black font-bold text-xl">$125.990</p>
      </div>

      <div className="w-full h-px bg-gray-300 my-4"></div>

      <div className="max-w-[470px] mx-auto px-6 py-6 flex gap-4 bg-gradient-main rounded-2xl mt-8 sm:mt-12">
        <Hands className="sm:w-20 sm:h-20 w-16 h-16 my-auto"/>

        <div className="flex flex-col gap-3 items-end justify-center w-full">
          <p className="text-white font-bold sm:text-[17px] text-[14px]">Negocia el precio de tus servicio</p>
          <p className="text-white font-bold sm:text-[17px] text-[14px]">y obtén un mejor beneficio.</p>

          <button className='rounded-full sm:px-7 px-5 py-1 bg-secondary hover:bg-white text-primary sm:text-[15px] text-[14px]'>
            Quiero negociar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCharge;
