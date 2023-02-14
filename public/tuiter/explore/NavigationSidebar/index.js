const NavigationSidebar = () => {
    return (`
    <div class="list-group">
        <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="home.html">
            <div class="row">
                <div class="col-3">
                    <i class="fa fa-home"></i>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Home</span>
                </div>
            </div>
        </a>
        <a class="list-group-item active" href="explore/index.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa fa-hashtag"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Explore</span>
                </div>
            </div>
        </a>
        <a class="text-nowrap list-group-item" href="notifications.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa-regular fa-bell"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Notifications</span>
                </div>
            </div>
        </a>
        <a class="list-group-item" href="messages.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa-regular fa-envelope"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Messages</span>
                </div>
            </div>
        </a>
        <a class="list-group-item" href="bookmarks/index.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa-regular fa-bookmark"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </div>
            </div>
        </a>
        <a class="list-group-item" href="lists.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa fa-list"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Lists</span>
                </div>
            </div>
        </a>
        <a class="list-group-item" href="profile.html">
            <div class="row">
                <div class="col-3">
                    <span class="fa-regular fa-user"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">Profile</span>
                </div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-3">
                    <span class="fa-solid fa-ellipsis"></span>
                </div>
                <div class="col-9">
                    <span class="d-none d-xl-inline">More</span>
                </div>
            </div>
        </a>
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
    </div>
    `);
}
export default NavigationSidebar;