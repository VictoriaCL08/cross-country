import './css/Event.css'

//https://xc-server-backend.onrender.com/

function Event(prop) {
  return (
    <div className="event">
        <h3>{prop.name}</h3>
        <p>{prop.date}</p>
        <img src={"http://localhost:3001/images/"+prop.img}/>
    </div>
  )  
};

export default Event;