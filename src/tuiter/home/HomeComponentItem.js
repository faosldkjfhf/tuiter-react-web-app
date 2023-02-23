import { Link } from "react-router-dom";
import "./index.css";

const HomeComponentItem = (
    post = {
        "avatarIcon": "bongo_cat.png",
        "userName": "SpaceX",
        "handle": "SpaceX",
        "time": "23h",
        "link": "spacex.com/updates",
        "postImage": "/tuiter/images/minecraft.png",
        "postText": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commerical spaceflight around the Moon",
        "comments": "595",
        "retweets": "1,168",
        "likes": "11.1K",
        "id": "123"
    }
) => {
    return (
        <li key={post.id} className="list-group-item">
            <div className="row">
                <div className="col-2 col-md-1">
                    <img className="rounded-circle" height={40} width={40} src={`/tuiter/images/${post.avatarIcon}`} />
                </div>
                <div className="col-10 col-md-11">
                    <span className="fw-bold">{post.userName} </span>
                    <span className="fa fa-circle-check"></span>
                    <span className="text-secondary"> {post.handle}</span>
                    <span className="text-secondary"> • {post.time}</span>
                    <div>
                        {post.postText}
                        <span> - {post.link}</span>
                    </div>
                    <div>
                        <img className="rounded wd-image mt-3" src={`/tuiter/images/${post.postImage}`} />
                    </div>
                    <div className="mt-2 mb-2 row">
                        <div className="col-3">
                            <Link className="text-secondary wd-no-link-decor" to="#">
                                <i className="fa-regular fa-comment"></i>
                                <span className="ms-3">{post.comments}</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="text-secondary wd-no-link-decor" to="#">
                                <i className="fas fa-retweet"></i>
                                <span className="ms-3">{post.retweets}</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="text-secondary wd-no-link-decor" to="#">
                                <i className="fa-regular fa-heart"></i>
                                <span className="ms-3">{post.likes}</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="text-secondary wd-no-link-decor" to="#">
                                <i className="fa fa-arrow-up-from-bracket"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default HomeComponentItem;