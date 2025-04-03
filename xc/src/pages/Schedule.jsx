import './css/Schedule.css';
import SemesterEvents from "../components/SemesterEvents";
import WeekSchedule from "../components/WeekSchedule";

function Schedule() {
  return (
    <main>
      <div className="practice">
        <h3>Practice Schedule</h3>
        <p>
          Practice is held several times a week. If school is in session, practice is almost always held (excluding
          weather events). Attendance is optional, and anyone is welcome!
          We meet Monday-Thursdays at 6:00 (it changes to 5:00 when not in day-light savings time) and Fridays at 4:30 pm. All runs start at the fields behind Strom. 
          Most routes are between 3-6 miles. Tuesdays are workout days.
                     
        </p>
      </div>

      <div className="weekly-sched">
        <WeekSchedule/>
      </div>

      <section className="semester-sched">
        <div className="event-title">
          <h3>Events This Semester</h3>
        </div>
        <div className="columns wrap">
            <SemesterEvents/>
        </div>
      </section>
    </main>
  )  
};

export default Schedule;