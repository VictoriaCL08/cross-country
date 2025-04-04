import './css/WeeklySchedule.css';
import {useState, useEffect} from "react";
import axios from "axios";
import DaySchedule from "./DaySchedule";

const WeekSchedule = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("https://xc-server-backend.onrender.com/api/schedule");
            setSchedule(response.data);
        })();

    }, []);

    return(
        <table className="table">
            <tr><th colspan="5">Route and Workout Schedule for the Week</th></tr>
          <tr>
            <th>Day</th>
            <th>XC Route</th>
            <th>Mileage</th>
            <th>Track Workout</th>
            <th>Effort</th>
          </tr>
          {schedule.map((schedule)=>(
                <DaySchedule
                id={schedule.id}
                day={schedule.date_id}
                route={schedule.route}
                mileage={schedule.mileage}
                track={schedule.track}
                effort={schedule.effort}
            />
          ))}

        </table>
    )


};

export default WeekSchedule;
