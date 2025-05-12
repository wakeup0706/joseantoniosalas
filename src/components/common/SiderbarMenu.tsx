type SidebarMenuProps = {
  text: string;
  active: boolean;
  onClick?: () => void;
};

const SiderbarMenu = ({ text, active, onClick }: SidebarMenuProps) => {
  const baseClass = "rounded-full px-4 py-2 border-2 text-sm font-semibold w-full";
  const activeClass = "bg-primary text-white border-primary";
  const inactiveClass = "bg-white text-primary border-primary hover:bg-secondary";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${active ? activeClass : inactiveClass}`}
    >
      {text}
    </button>
  );
};

export default SiderbarMenu;