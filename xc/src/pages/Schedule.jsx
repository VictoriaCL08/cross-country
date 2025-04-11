import './css/Schedule.css';
import SemesterEvents from "../components/SemesterEvents";
import WeekSchedule from "../components/WeekSchedule";

function Schedule() {
  return (
    <main>
      <div className="practice">
        <h3>Practice Schedule</h3>
        <p>
          Cross country practice is held several times a week. If school is in session, practice is almost always held (excluding
          weather events). Attendance is optional, and anyone is welcome!
          We meet Monday-Thursdays at 6:00 (it changes to 5:00 when not in day-light savings time) and Fridays at 4:30 pm. All runs start at the fields behind Strom. 
          Most routes are between 3-6 miles. There is an optional workout once a week.
        </p>
      </div>


      <section className="semester-sched">
        <SemesterEvents/>
      </section>
    </main>
  )  
};

export default Schedule;