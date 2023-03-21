import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const ProfileComponent = () => {
    const user = useSelector(state => state.user)
    console.log(user);
    return (
        <div>
            <div className="row side-border">
                <div className="mt-2 col-1">
                    <Link to="/tuiter/home"><i className="text-black fa-solid fa-arrow-left"></i></Link>
                </div>
                <div className="col-11">
                    <div><span className="text-bold"> {user.firstName} {user.lastName} </span></div>
                    <div> {user.numTuits} Tuits </div>
                </div>
                <img className="p-0 mt-2 img-fluid" src={`/images/${user.bannerPicture}`} />
                <div className="row">
                    <div className="col-9">
                        <img className="profile-pic p-0 mt-2 img-fluid rounded-circle" width="250px" src={`/images/${user.profilePicture}`} />
                    </div>
                    <div className="mt-2 col-3 text-right">
                        <button className="btn btn-outline-secondary rounded-pill">Edit Profile</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ProfileComponent;