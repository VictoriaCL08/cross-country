import './css/WeeklySchedule.css';

function DaySchedule(props) {
    return(
        <tr>
            <td>{props.day}</td>
            <td>{props.route}</td>
            <td>{props.mileage}</td>
            <td>{props.track}</td>
            <td>{props.effort}</td>
        </tr>
    )



};

export default DaySchedule;