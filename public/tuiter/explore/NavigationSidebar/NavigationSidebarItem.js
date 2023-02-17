export default function NavigationSidebarItem(data) {
    return (`
        <div class="row">
            <div class="col-3">
                ${data.icon}
            </div>
            <div class="col-9">
                <span class="d-none d-xl-inline">${data.title}</span>
            </div>
        </div>
    `)
}