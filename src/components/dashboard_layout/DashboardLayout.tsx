import React, { ReactNode } from 'react';
import Topbar from './Topbar';
import { useAppStore } from '../../store/appStore';
import SidebarWrapper from './SidebarWrapper ';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  const collapsed = useAppStore((state) => state.collapsed);

  return (
    <div className="flex h-screen">
      <SidebarWrapper />
      <div className={`flex-1 transition-all duration-300 flex flex-col overflow-hidden -ml-80 ${collapsed ? 'md:-ml-80' : 'md:ml-0'}`}>
        <Topbar />
        <main className={`transition-all duration-300 overflow-y-auto`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;