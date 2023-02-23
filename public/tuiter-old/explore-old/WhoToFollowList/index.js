import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

function WhoToFollowList() {
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                <b>Who to follow</b>
            </li>
            ${who.map(item => {
                return WhoToFollowListItem(item)
            }).join('')}
        </ul>
 `); 
}

export default WhoToFollowList;