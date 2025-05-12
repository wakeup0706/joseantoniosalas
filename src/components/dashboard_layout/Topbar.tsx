import React from 'react';
import { useAppStore } from '../../store/appStore';
import { Home_Strocke, } from "../icons";
import LogoComponent from '../common/LogoComponent';
import HamburgerMenu from '../common/HamburgerMenu';

const Topbar: React.FC = () => {

  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const collapsed = useAppStore((state) => state.collapsed);

  return (
    <div className="rounded-br-md items-center py-2 md:py-5 shadow-md">
      <div className={`px-4 md:px-16 mx-auto flex justify-between transition-all duration-300`}>
        <div className='gap-4 md:gap-8 flex items-center'>
          <button onClick={toggleSidebar}><HamburgerMenu /></button>
          <LogoComponent textSize='xl' imgOther='w-[35px] md:w-[50px]' textOther='text-[16px]' />
        </div>
        <button className='rounded-full px-3 hover:bg-gray-100'><Home_Strocke className="w-6 h-6" /></button>
      </div>
    </div>
  );
};

export default Topbar;


