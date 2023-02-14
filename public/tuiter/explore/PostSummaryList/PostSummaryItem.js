const PostSummaryItem = post => {
    return (`                            
        <li class="list-group-item">
            <div class="row">
                <div class="col-sm-9 col-xl-10">
                    <span class="text-secondary fw-normal">${post.topic}</span>
                    <div class="fw-bold">
                        <span>${post.userName}</span>
                        <span class="fas fa-circle-check"></span>
                        <span class="fw-normal text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bold">
                        ${post.title}
                    </div>
                </div>
                <div class="col-sm-3 col-xl-2">
                    <img class="rounded" height="auto" width="100%" src="${post.image}">
                </div>
            </div>
        </li>
    `)
};

export default PostSummaryItem;