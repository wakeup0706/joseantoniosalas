import { Vector } from "../icons";

const TopSection = () => {
  return (
    <div className='w-full grid grid-cols-12 gap-8'>
        <div className='w-full sm:col-span-5 col-span-12 flex gap-4 px-4 sm:px-0'>
            <button className='bg-primary py-3 rounded-full w-full text-white text-[15px] sm:text-xl max-h-[50px]'>
                Próximos Cobros
            </button>
            <button className='bg-secondary py-3 rounded-full w-full text-primary text-[15px] sm:text-xl max-h-[50px] hover:bg-secondary-100'>
                Ver Todo
            </button>
        </div>

        <div className='w-full sm:col-span-7 col-span-12 px-4 sm:px-0'>
            <div className='flex flex-col gap-3 bg-gradient-main rounded-3xl px-4 py-4 sm:px-16'>
                <p className='text-[#0D99FF] sm:text-right text-center text-[16px] w-full sm:text-2xl font-bold'>¿Deseas bajar tus cobros de servicios?</p>
                <p className='text-white sm:text-right text-center text-[16px] w-full sm:text-xl font-bold'>Nuestros expertos pueden negociar </p>
                <p className='text-white sm:text-right text-center text-[16px] w-full sm:text-xl font-bold'>por ti a un mejor precio. </p>

                <div className='flex justify-between mt-6 px-6 sm:px-0 items-center'>
                    <div className=''><Vector className="sm:w-16 sm:h-16 w-12 h-12"/></div>

                    <button className='rounded-full sm:px-7 px-5 bg-secondary !w-h-[40px] hover:bg-white text-primary font-medium sm:text-xl text-[15px]'>
                        ¡Lo quiero!
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TopSection;
