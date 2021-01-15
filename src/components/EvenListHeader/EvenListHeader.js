import './EventListHeader.css';

function EventListHeader(props) {
    return (
        <tr>
            <th>Event Name</th>
            <th>Odd For First Team</th>
            <th>Odd For Draw</th>
            <th>Odd For Second Team</th>
            <th>Event Start Date</th>
        </tr>
    );
}

export default EventListHeader;
