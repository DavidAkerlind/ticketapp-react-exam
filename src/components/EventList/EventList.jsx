import EventItem from '../EventItem/EventItem';
import './EventList.css';

function EventList({ events }) {
	if (events.length === 0) {
		return <p className="error-p">No events found</p>;
	}

	return (
		<ul className="event-list">
			{events.map((event, index) => (
				<EventItem key={index} event={event} />
			))}
		</ul>
	);
}

export default EventList;
