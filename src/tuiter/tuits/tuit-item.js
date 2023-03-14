import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ key, post }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li key={key} className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img className="rounded-circle" width={40} src={`/images/${post.image}`} />
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bold">{post.userName} </span>
                    <span className="light-blue fa fa-circle-check"></span>
                    <span className="text-secondary"> @{post.handle}</span>
                    <span className="text-secondary"> • {post.time}</span>
                    <div>
                        {post.tuit}
                    </div>
                    <TuitStats stats={post} />
                </div>
            </div>
        </li>
    )
};

export default TuitItem;