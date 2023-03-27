import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    const { postsArray, loading } = useSelector(state => state.tuitsData)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem post={post} />)
            }
        </ul>
    );
};
export default PostSummaryList;