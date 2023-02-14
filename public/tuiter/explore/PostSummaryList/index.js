import PostSummaryItem from "./PostSummaryItem.js"
import post from "./post.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${post.map(item => {
                return PostSummaryItem(item)
            }).join('')}
        </ul>
    `)
};

export default PostSummaryList;