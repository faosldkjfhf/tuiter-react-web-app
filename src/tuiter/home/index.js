import HomeComponentItem from "./HomeComponentItem";
import home from "./home.json"

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {home.map((item) => (
                <HomeComponentItem {...item} />
            ))}
        </ul>
    );
}

export default HomeComponent;