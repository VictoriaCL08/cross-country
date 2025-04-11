import './css/Officer.css'
function OfficerL(props) {
  return (
    <section className="columns officer-main">
        <div className="img-section one">
            <img src={"http://localhost:3001/images/" + props.img} />
        </div>
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
    </section> 
  )  
};

export default OfficerL;