import { Link } from "react-router-dom";

function IsActive(title, active) {
    return active === title ? 'active' : ''
}

const NavigationSidebarItem = (
    {
        item = {
            "title": "Home",
            "href": "../home",
            "_id": "123",
            "icon": "fa fa-home"
        },
        active = 'Explore'
    }
) => {
    return (
        <Link key={item._id} className={`list-group-item ${IsActive(item.title, active)}`} to={item.href}>
            <div className="row">
                <div className="col-3">
                    <span className={item.icon}></span>
                </div>
                <div className="col-9">
                    <span className="d-none d-xl-inline">{item.title}</span>
                </div>
            </div>
        </Link>
    );
};

export default NavigationSidebarItem;