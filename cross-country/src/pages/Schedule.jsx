import './css/Schedule.css'
import Event from '../components/Event'

function Schedule() {
  return (
    <main>
      <div className="practice">
        <h3>Practice Schedule</h3>
        <p>
          Practice is held several times a week. If school is in session, practice is almost always held (excluding
          weather events). Attendance is optional, and anyone is welcome!
          We meet Monday-Thursdays at 5:00 and Fridays at 4:30 pm. All runs start at the fields behind Strom. 
          Most routes are between 3-6 miles. Tuesdays are workout days.
                     
        </p>
      </div>

      <div className="weekly-sched">
        <table className="table">
          <tr><th colspan="5">Route and Workout Schedule for the Week</th></tr>
          <tr>
            <th>Day</th>
            <th>XC Route</th>
            <th>Mileage</th>
            <th>Track Workout</th>
            <th>Effort</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>Stadium</td>
            <td>4-6 miles</td>
            <td>2x100 m</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Track Workout</td>
            <td>4x800 m</td>
            <td>6x150 m</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Wheat</td>
            <td>3-5 Miles</td>
            <td>4x300 m</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>Riverfront</td>
            <td>4-8 Miles</td>
            <td>3x50 m</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Granby</td>
            <td>3 Miles</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        </table>
      </div>

      <section className="semester-sched">
        <div className="event-title">
          <h3>Events This Semester</h3>
        </div>
        <div className="columns wrap">
            <Event 
              name="Track Info Meeting"
              date="1/30"
              img="./images/track-info-pic.png"
            />

            <Event 
              name="Valentine's Day Cookie Run"
              date="2/14"
              img="./images/cookie-run.png"
            />
            <Event 
              name="UNC Outdoor Track Meet"
              date="2/22"
              img="./images/track-pic.png"
            />
            <Event 
              name="4x4x48"
              date="2/21-2/23"
              img="./images/night-4-4-48-img.png"
            />
        </div>
      </section>
    </main>
  )  
};

export default Schedule;