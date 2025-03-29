import './css/Officer.css'

function OfficerR(props) {
  return (
    <section className="columns officer-main">
        <div className="text-section one">
            <h3>{props.title}</h3>
            <h4>{props.name}</h4>
            <ul>
                <li>Major: {props.major}</li>
                <li>Year: {props.year}</li>
                <li>Home town: {props.home}</li>
                <li>Favorite Event: {props.event}</li>
            </ul>
        </div>
        <div className="img-section one">
            <img src={process.env.PUBLIC_URL + "/" + props.img} />
        </div>
    </section>
  )  
};

export default OfficerR;