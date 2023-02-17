import PostLink from "./link.js"

export default function PostItem(post) {
    var fullPost = (`           
        <div class="mt-2 wd-border-bottom row" style="color: white">
            <div class="col-1">
                <img class="rounded-circle" height="40px" width="40px" src="${post.avatarIcon}"></img>
            </div>
            <div class="col-11">
                <span class="fw-bold">${post.userName}</span>
                <span class="fa fa-circle-check"></span>
                <span class="text-secondary">${post.handle}</span>
                <span class="text-secondary">• ${post.time}</span>
                <div>${post.postText}</div>
                <div>
                    <img class="wd-rounded-top wd-image mt-3" src="${post.postImage}">
                    <div class="post-text wd-rounded-bottom">
                        <div class="ms-2 mt-2">${post.linkTitle}</div>
                        <div class="ms-2 text-secondary">${post.linkText}</div>
                        <span class="post-link ms-2 mb-2 text-secondary" id="post-text">
                            <span class="text-secondary fa-solid fa-link"></span> ${post.link}
                        </span>
                    </div>
                </div>
                <div class="mt-2 mb-2 row">
                    <div class="col-3">
                        <a class="text-secondary wd-no-link-decor" href="#">
                            <i class="fa-regular fa-comment"></i>
                            <span class="ms-3">${post.comments}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a class="text-secondary wd-no-link-decor" href="#">
                            <i class="fas fa-retweet"></i>
                            <span class="ms-3">${post.retweets}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a class="text-secondary wd-no-link-decor" href="#">
                            <i class="fa-regular fa-heart"></i>
                            <span class="ms-3">${post.likes}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a class="text-secondary wd-no-link-decor" href="#">
                            <i class="fa fa-arrow-up-from-bracket"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `)

    if (post.link === '') {
        var text = $(fullPost).find("div[class=post-text]");
        console.log(text);
        $(text).hide();
        var image = $('.wd-image');
        $(fullPost).find(image).css("border-bottom-right-radius", "20px");
        $(fullPost).find('.wd-image').css("border-bottom-left-radius", "20px");
    }

    return fullPost;
};