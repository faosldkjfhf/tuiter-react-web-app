import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./index.css";

const EditProfileComponent = () => {
    const user = useSelector(state => state.user);
    const [currentUser, setCurrentUser] = useState(user);
    return (
        <div className="row border rounded">
            <div className="mt-2 row">
                <Link to="/tuiter/profile" className="text-black no-text-decor mt-2 col-1 fa-solid fa-xmark"></Link>
                <span className="mt-1 text-bold col-9">Edit Profile</span>
                <Link to="/tuiter/profile" className="col-2 btn btn-sm btn-outline-secondary rounded-pill">Save</Link>
            </div>

            <img className="p-0 mt-2 img-fluid" src={`/images/${user.bannerPicture}`} />
            <div className="mb-2 row">
                <div className="col-9">
                    <img className="profile-pic p-0 mt-2 img-fluid rounded-circle" width="250px" src={`/images/${user.profilePicture}`} />
                </div>
            </div>

            <div className="mb-3 margin-top-big row">
                <div className="col-12 form-floating">
                    <textarea defaultValue={`${user.firstName} ${user.lastName}`} className="form-control" placeholder="Edit Name" id="floatingTextarea1" rows="50" cols="40"></textarea>
                    <label className="ms-2" for="floatingTextarea1">Name</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea defaultValue={`${user.bio}`} className="responsive-height form-control big-text-box " placeholder="Edit Bio" id="floatingTextarea2"></textarea>
                    <label className="ms-2" for="floatingTextarea2">Bio</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea defaultValue={`${user.location}`} className="form-control" placeholder="Edit Location" id="floatingTextarea3"></textarea>
                    <label className="ms-2" for="floatingTextarea3">Location</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea defaultValue={`${user.website}`} className="form-control" placeholder="Edit Website" id="floatingTextarea4"></textarea>
                    <label className="ms-2" for="floatingTextarea4">Website</label>
                </div>

                <form className="col-12 mt-3 form-floating">
                    <input type="date" defaultValue={user.dateOfBirth} className="form-control" id="floatingInputValue" />
                    <label className="ms-2" for="floatingInputValue">Date of Birth</label>
                </form>

            </div>
        </div>
    );
};

export default EditProfileComponent;