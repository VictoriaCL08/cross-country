import "./css/HousePlan.css";

const HousePlan = (props) => {
    return (
        <section className="house-plan columns">
            <section className="feature-image">
                <img src={"http://localhost:3001/images/" + props.main_image} alt={props.name}/>
            </section>
            <section className = "info">
                <h3>{props.name}</h3>
                <p>Size: {props.size}</p>
                <p>Bedrooms: {props.bedrooms}</p>
                <p>Bathrooms: {props.bathrooms}</p>
            </section>
        </section>
    );
};

export default HousePlan;