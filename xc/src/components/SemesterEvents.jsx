import {useState, useEffect} from "react";
import axios from "axios";
import Event from "./Event";

const SemesterEvents = () => {
    const [events, setevents] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:3001/api/events");
            setevents(response.data);
        })();

    }, []);

    return(
        <div className="columns wrap">
            {events.map((event)=>(
                <Event
                    id={event.id}
                    name={event.event_name}
                    date={event.event_date}
                    img={event.event_img}

                />
            ))}

            
        </div>

    )

};
export default SemesterEvents;