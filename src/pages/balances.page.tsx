import DashboardLayout from '../components/dashboard_layout/DashboardLayout';
import GptButton from '../components/common/GptButton';
import { Link } from 'react-router-dom';
import SubscriptionTable from '../components/balances_layout/Subscirption';
import FixPagenation from '../components/common/FixPagenation';

const BalancesPage = () => {
  return (
    <DashboardLayout>
      <div className='w-full max-w-[1100px] mx-auto mt-20 mb-20'>
        <div className='flex justify-between w-[70%] items-center'>
          <div className='text-xl text-ct-grey font-semibold sm:pl-0 pl-4'>Saldos</div>
        </div>
        <SubscriptionTable />
      </div>
      <FixPagenation />
      <GptButton />
    </DashboardLayout>
  );
};

export default BalancesPage;