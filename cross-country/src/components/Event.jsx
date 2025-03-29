import './css/Event.css'

function Event(prop) {
  return (
    <div className="event">
        <h3>{prop.name}</h3>
        <p>{prop.date}</p>
        <img src={process.env.PUBLIC_URL + "/" + prop.img}/>
    </div>
  )  
};

export default Event;