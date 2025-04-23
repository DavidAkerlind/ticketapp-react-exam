import EventItem from '../EventItem/EventItem';
import './SelectEventList.css';
function SelectEventList({ tickets }) {
	return (
		<ul className="event-list">
			{Object.entries(tickets).map(([eventId, eventTickets], index) => {
				// Använder första ticket infon som data för att de ör ju samma event på resterande tickets för det eventet
				const eventInfo = eventTickets[0];

				return (
					<EventItem
						key={eventId}
						event={eventInfo}
						variant="ticket"
						eventId={eventId}
						amount={eventTickets.length}
					/>
				);
			})}
		</ul>
	);
}

export default SelectEventList;
