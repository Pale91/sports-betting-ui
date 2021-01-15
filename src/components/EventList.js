import { connect } from 'react-redux';
import EventListHeader from './EvenListHeader/EvenListHeader';
import Event from './Event/Event';

function EventListUI(props) {
  return (
    <table>
        <EventListHeader  />
        {
            props.events.map(e => <Event key={e.id} {...e} /> )
        }
    </table>
  );
}

const mapStateToProps = (state, ownProps) => ({
    events: state.events
})

const mapDispatchToProps = () => ({
})

const EventList = connect(mapStateToProps, mapDispatchToProps)(EventListUI);

export default EventList;
