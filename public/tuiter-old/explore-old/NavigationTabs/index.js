import NavigationTab from "./NavigationTab.js";
import nav from "./nav.js";

function NavigationTabs() {
    return (`
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        ${nav.map(tab => {
            return NavigationTab(tab)
        }).join('')}
    `)
};

export default NavigationTabs;