import './css/Event.css'

//http://localhost:3001/images/

function Event(prop) {
  return (
    <div className="event">
        <h3>{prop.name}</h3>
        <p>{prop.date}</p>
        <img src={"https://xc-server-backend.onrender.com/api/events/images/"+prop.img}/>
    </div>
  )  
};

export default Event;