import DashboardLayout from '../components/dashboard_layout/DashboardLayout';
import GptButton from '../components/common/GptButton';
import TopSection from '../components/subscription_layout/Topsection';
import SubscriptionTable from '../components/subscription_layout/Table';
import UpcomingCharge from '../components/subscription_layout/UpcomingCharge';
import { Link } from 'react-router-dom';
import FixPagenation from '../components/common/FixPagenation';

const SubscriptionPage = () => {
  return (
    <DashboardLayout>
      <div className='w-full max-w-[1100px] mx-auto mt-20 mb-20'>
        <TopSection />
        <SubscriptionTable />
        <UpcomingCharge />
      </div>
      <FixPagenation />
      <GptButton />
    </DashboardLayout>
  );
};

export default SubscriptionPage;