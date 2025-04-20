import './EventDetails.css';

function EventDetails({ event }) {
	return (
		<section className="event-details">
			<h3 className="page__header">{event.name}</h3>
			<p className="event-details__datetime">
				{event.when.date} kl {event.when.from} - {event.when.to}
			</p>
			<p className="event-details__location">@ {event.where}</p>
		</section>
	);
}

export default EventDetails;
