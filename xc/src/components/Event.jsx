import './css/Event.css'

function Event(prop) {
  return (
    <div className="event">
        <h3>{prop.name}</h3>
        <p>{prop.date}</p>
        <img src={"https://xc-server-backend.onrender.com/" + prop.img}/>
    </div>
  )  
};

export default Event;