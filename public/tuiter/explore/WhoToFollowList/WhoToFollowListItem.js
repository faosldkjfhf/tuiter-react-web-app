function WhoToFollowListItem(who) {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-lg-2 col-xl-2">
                    <img class="rounded-circle" height="50px" width="50px" src="${who.avatarIcon}">
                </div>
                <div class="text-nowrap ms-lg-1 ms-xl-0 col-lg-6 col-xl-6 col-xxl-7">
                    <span class="fw-bold">${who.userName}</span>
                    <span class="fa fa-circle-check"></span>
                    <br />
                    <span class="fw-normal">${who.handle}</span>
                </div>
                <div class="ms-xl-4 ms-xxl-2 mt-1 col-2 col-xxl-2">
                    <button class="btn btn-primary wd-border-radius-24" id="follow-button">Follow</button>
                </div>
            </div>
        </li>
    `)
};

export default WhoToFollowListItem;
