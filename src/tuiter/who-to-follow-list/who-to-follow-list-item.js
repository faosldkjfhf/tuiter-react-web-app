import { parsePath } from "react-router";


const WhoToFollowListItem = (
    {
        who = {
            userName: 'NASA',
            handle: 'NASA',
            avatarIcon: 'nasa.png'
        }
    }
) => {
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} />
                    </div>
                    <div className="ms-lg-2 ms-xl-0 col-lg-7 col-xl-8">
                        <div>
                            <span className="fw-bold">{who.userName} </span>
                            <span className="fa fa-circle-check"></span>
                        </div>
                        <div className="fw-normal">@{who.handle}</div>
                    </div>
                    <div className="mt-1 col-2">
                        <button className="btn btn-primary rounded-pill float-end">Follow</button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default WhoToFollowListItem;