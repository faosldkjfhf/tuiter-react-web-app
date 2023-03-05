import HomeComponentItem from "./HomeComponentItem";
import home from "./home.json";
import React, { useState } from 'react';

const HomeComponent = () => {
    const [id, setID] = useState(0);
    return (
        <ul className="list-group">
            {home.map((item) => (
                <HomeComponentItem key={item._id} post={item} />
            ))}
        </ul>
    );
}

export default HomeComponent;