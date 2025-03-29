import './css/Officer.css'

function OfficerL(props) {
  return (
    <main className="columns officer-main">
        <div className="img-section">
            <img src={process.env.PUBLIC_URL + "/" + props.img} />
        </div>
        <div className="text-section">
            <h3>{props.title}</h3>
            <h4>{props.name}</h4>
            <ul>
                <li>Major: {props.major}</li>
                <li>Year: {props.year}</li>
                <li>Home town: {props.home}</li>
                <li>Favorite Event: {props.event}</li>
            </ul>
        </div>
    </main>
  )  
};

export default OfficerL;