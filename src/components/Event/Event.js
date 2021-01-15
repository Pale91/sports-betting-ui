import "./Event.css"

function Event(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.odds1stTeam}</td>
            <td>{props.oddsForDraw}</td>
            <td>{props.odds2ndTeam}</td>
            <td>{props.date}</td>
        </tr>
    );
}

export default Event;