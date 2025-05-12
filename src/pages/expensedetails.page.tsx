import { useState } from 'react';
import DashboardLayout from '../components/dashboard_layout/DashboardLayout';
import DayChart from '../components/expensedetails_layout.tsx/DayChart';
import SubscriptionTable from '../components/expensedetails_layout.tsx/Table';
import DetailSubscription from '../components/expensedetails_layout.tsx/DetailSubscription';
import TopSection from '../components/expensedetails_layout.tsx/Topsection';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NextSubscriptionTable from '../components/expensedetails_layout.tsx/NextTable';
import NextDayChart from '../components/expensedetails_layout.tsx/NextDayChart';
import FixPagenation from '../components/common/FixPagenation';

const ExpensePage = () => {
  const [activeTab, setActiveTab] = useState("current");
  return (
    <DashboardLayout>
      <div className='w-full max-w-[1100px] mx-auto mt-20 mb-20'>
        <TopSection activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "current" ? (
          <>
            <SubscriptionTable />
            <DetailSubscription />
            <DayChart />
          </>
        ) : (
          <>
            <NextSubscriptionTable />
            <DetailSubscription />
            <NextDayChart />
          </>
        )}
      </div>
      <FixPagenation />
    </DashboardLayout>
  );
};
export default ExpensePage;