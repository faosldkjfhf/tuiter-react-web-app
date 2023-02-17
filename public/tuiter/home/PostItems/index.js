import posts from "./post.js";
import PostItem from "./PostItem.js";

function PostItems() {
    return (`
        ${posts.map(post => {
            return PostItem(post)
        }).join('')}
    `)
};

export default PostItems;