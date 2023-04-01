import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostSummaryItem from "./post-summary-item";
import { findTuitsThunk } from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData);
    console.log(tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map((post) =>
                    (<PostSummaryItem post={post} />))
            }
        </ul>
    );
};
export default PostSummaryList;