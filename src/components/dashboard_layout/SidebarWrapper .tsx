import Sidebar from './Sidebar';
import { useAppStore } from '../../store/appStore';

const SidebarWrapper = () => {

    const collapsed = useAppStore((state) => state.collapsed);
    const toggleSidebar = useAppStore((state) => state.toggleSidebar);

  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <Sidebar collapse={collapsed} />
    </>
  );
};

export default SidebarWrapper;