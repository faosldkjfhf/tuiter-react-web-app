import NavigationSidebarItem from "./NavigationSidebarItem.js";

export default function NavigationSidebar(active = 'Explore') {
    const links = [
        {
            title: '',
            href: '#',
            icon: `<i class="fab fa-twitter"></i>`
        },
        {
            title: 'Home',
            href: '../home/index.html',
            icon: `<i class="fa fa-home"></i>`
        },
        {
            title: 'Explore',
            href: '../explore/index.html',
            icon: `<span class="fa fa-hashtag"></span>`
        },
        {
            title: 'Notifications',
            href: '../notifications.html',
            icon: `<span class="fa-regular fa-bell"></span>`
        },
        {
            title: 'Messages',
            href: '../messages.html',
            icon: `<span class="fa-regular fa-envelope"></span>`
        },
        {
            title: 'Bookmarks',
            href: '../bookmarks/index.html',
            icon: `<span class="fa-regular fa-bookmark"></span>`
        },
        {
            title: 'Lists',
            href: '../lists.html',
            icon: `<span class="fa fa-list"></span>`
        },
        {
            title: 'Profile',
            href: '../profile.html',
            icon: `<span class="fa-regular fa-user"></span>`
        },
        {
            title: 'More',
            href: '#',
            icon: `<span class="fa-solid fa-ellipsis"></span>`
        }
    ]
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
