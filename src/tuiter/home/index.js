import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <WhatsHappening />
            <TuitList />
        </div>
    );
}

export default HomeComponent;