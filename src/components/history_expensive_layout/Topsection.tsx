import { Filter } from "../icons";

const TopSection = () => {
  return (
    <div className='w-full flex justify-between sm:px-0 px-4'>
        <div className='flex gap-2'>
            <button className='bg-primary py-3 px-6 rounded-full w-full text-white text-[14px] sm:text-[17px] max-h-[50px]'>
                Histórico
            </button>
            <button className='bg-secondary py-3 px-6 rounded-full w-full text-primary text-[14px] sm:text-[17px] max-h-[50px] hover:bg-secondary-100'>
                Este Mes
            </button>
        </div>

        <div className='px-4 flex items-center justify-center rounded-full text-primary cursor-pointer hover:bg-gray-100'>
            <Filter className='w-24 h-6' />
        </div>
    </div>
  );
};

export default TopSection;
