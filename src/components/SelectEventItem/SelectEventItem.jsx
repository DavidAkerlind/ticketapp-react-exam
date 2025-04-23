import { Link } from 'react-router-dom';

function SelectEventItem({ eventInfo, eventId, amount }) {
	return (
		<Link to={`/tickets/${eventId}`} className="event-selection__item">
			<h2 className="event-selection__name">{eventInfo.eventName}</h2>
			<div className="event-selection__details">
				<p className="event-selection__venue">{eventInfo.where}</p>
				<time className="event-selection__date">
					{eventInfo.when.date} - {eventInfo.when.from}
				</time>
				<p className="event-selection__ticket-count">
					Tickets: {amount}
				</p>
			</div>
		</Link>
	);
}

export default SelectEventItem;
