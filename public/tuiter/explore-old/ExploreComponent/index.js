import PostSummaryList from "../PostSummaryList/index.js"
import NavigationTabs from "../NavigationTabs/index.js"

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col-sm-10 col-md-11 mb-2">
                <span class="fa fa-search wd-magnifying-glass"></span>
                <input type="text" class="ms-2 form-control wd-search-bar" placeholder="Search Tuiter">
            </div>
            <div class="col-sm-2 col-md-1">
                <a href="explore-settings.html">
                    <i class="ms-sm-4 ms-md-0 fa-2x fa fa-gear"></i>
                </a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            ${NavigationTabs()}
        </ul>
        <div class="d-flex position-relative">
            <img class="wd-position-rel" src="../images/catjam.jpeg">
            <h3 class="fw-bold wd-text-overlay text-light">SpaceX's Starship</h3>
        </div>
        ${PostSummaryList()}
 `); 
}

export default ExploreComponent;