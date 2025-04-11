import "./css/Event.css"
import {useState, useEffect} from "react";
import axios from "axios";
import Event from "./Event";
import AddEvent from "./AddEvent";

//https://xc-server-backend.onrender.com/api/events
const SemesterEvents = () => {
    const [events, setEvents] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:3001/api/events");
            setEvents(response.data);
        })();

    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateEvents = (event) => {
        setEvents((events)=>[...events, event]);
    };






    return(
        <>
        <div className="event-title">
          <h3>Events This Semester</h3>
          <button className="add-btn" id="add-event" onClick={openAddDialog}>+</button>
        </div>
        

        {showAddDialog?(<AddEvent 
                closeAddDialog={closeAddDialog}
                updateEvents={updateEvents}
                /> ): ("")}


            <div className="columns wrap">
                {events.map((event)=>(
                    <Event
                        key={event.name}
                        id={event.id}
                        name={event.event_name}
                        date={event.event_date}
                        img={event.event_img}

                    />
                ))}

                
            </div>
        </>
    )

};
export default SemesterEvents;