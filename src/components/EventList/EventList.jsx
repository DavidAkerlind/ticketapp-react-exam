import EventItem from '../EventItem/EventItem';
import './EventList.css';

function EventList({ events }) {
	console.log(events);

	return (
		<ul className="event-list">
			{events.map((event, index) => (
				<EventItem key={index} event={event} />
			))}
		</ul>
	);
}

export default EventList;
