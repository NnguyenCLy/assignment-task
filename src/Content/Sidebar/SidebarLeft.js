import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

const SidebarLeft = () => {
  return (
    <aside id="sidebar-left" className="sidebar-left">
      <SidebarHeader name="Navigation"></SidebarHeader>
      <SidebarContent></SidebarContent>
    </aside>
  );
};

export default SidebarLeft;
