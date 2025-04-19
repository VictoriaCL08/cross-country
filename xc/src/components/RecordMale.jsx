import "./css/ClubRecord.css"
function Record(props) {
    return (
        <tr>
            <td>{props.event}</td>
            <td>{props.name}</td>
            <td>{props.mark}</td>
            <td>{props.meet}</td>
            <td>{props.year}</td>
        </tr>
    )
};

export default Record;