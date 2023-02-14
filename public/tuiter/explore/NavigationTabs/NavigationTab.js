const NavigationTab = tab => {
    return (`
    <li class="nav-item">
        <a class="nav-link" href="${tab.link}">${tab.name}</a>
    </li>   
    `)
};

export default NavigationTab;