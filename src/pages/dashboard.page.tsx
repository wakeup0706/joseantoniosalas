import AddAccount from '../components/dashboard_layout/AddAccount';
import DashboardLayout from '../components/dashboard_layout/DashboardLayout';
import Gastos_Recientes from '../components/dashboard_layout/Gastos_Recientes';
import ProximoCobros from '../components/dashboard_layout/ProximoCobros';
import CustomLineChart from '../components/dashboard_layout/LineChart';
import { Premium } from '../components/icons';
import Presupuesto from '../components/dashboard_layout/Presupuesto';
import GptButton from '../components/common/GptButton';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className='max-w-[1100px] mx-auto mt-20'>
          <div>
            <div className='flex justify-between w-full sm:w-[70%] sm:items-center pl-5 pr-3 flex-col sm:flex-row gap-1'>
              <div className='md:text-xl text-ct-grey font-semibold'>Buen Día,<span>Jacobo</span>.</div>
              <button className="text-sm cursor-pointer sm:text-lg bg-primary text-white items-center gap-2 px-8 py-1 mb-0 sm:mb-1 flex rounded-full hover:bg-hoverColor transition">
                <Premium /> Hazte Premium
              </button>
            </div>
            <div className='justify-between grid grid-cols-1 md:grid-cols-[70%_30%] gap-5 p-5 pt-3'>
              <CustomLineChart />
              <AddAccount />
            </div>
          </div>

          <div className='mt-[20px]'>
            <div className='flex justify-between w-[70%] items-center px-5'>
              <div className='md:text-xl text-ct-grey font-semibold'>Gastos</div>
            </div>
            <div className='justify-between grid grid-cols-1 md:grid-cols-[70%_30%] gap-5 p-5'>
              <Gastos_Recientes />
              <ProximoCobros />
            </div>
          </div>

          <div className='mt-[20px]'>
            <div className='flex justify-between items-center px-5'>
              <div className='md:text-2xl text-ct-grey font-semibold'>Presupuesto Abril</div>
            </div>
            <div className='p-5 pr-0 pb-0'>
              <Presupuesto />
            </div>
          </div>

          <GptButton />
        </div>
    </DashboardLayout>
  );
};

export default DashboardPage;