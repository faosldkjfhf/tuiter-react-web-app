import NavigationSidebarItem from "./NavigationSidebarItem.js";
import links from "./links.js";

export default function NavigationSidebar(active = 'Explore') {
    return (`
    <div class="list-group">
        ${links.map(link => `
            <a class="list-group-item ${link.title === active ? 'active' : ''}" href="${link.href}">
                ${NavigationSidebarItem(link)}
            </a>
            `).join('')
        }
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
    </div>
    `);
};


