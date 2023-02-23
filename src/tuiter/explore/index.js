import React from "react";
import PostSummaryList from "../post-summary-list";
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./index.css";
const ExploreComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <span className="fa fa-magnifying-glass position-absolute wd-nudge-up"></span>
                </div>
                <div className="col-1">
                    <span className="fa fa-gear text-primary float-end fs-2 "></span>
                </div>
            </div>
            <ul className="mt-2 nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/minecraft.png" className="w-100" />
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList />
        </div>
    );
};
export default ExploreComponent;