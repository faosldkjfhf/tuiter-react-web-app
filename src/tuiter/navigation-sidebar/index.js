import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <Link className="list-group-item">
                <i class="fab fa-twitter"></i>
                Tuiter
            </Link>
            <Link className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                Home
            </Link>
            <Link className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                Explore
            </Link>
            <Link className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                Notifications
            </Link>
            <Link className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                Messages
            </Link>
            <Link className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </Link>
            <Link className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                Lists
            </Link>
            <Link className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                Profile
            </Link>
            <Link className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;