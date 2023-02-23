import NavigationSidebarItem from "./NavigationSidebarItem";
import sidebar from "./sidebar.json";


const NavigationSidebar = (
    {
        active = 'Explore'
    }
) => {
    return (
        <div className="list-group">
            {sidebar.map((sidebarItem) => (
                <NavigationSidebarItem item={sidebarItem} active={active} />
            ))}
        </div>
    );
};
export default NavigationSidebar;