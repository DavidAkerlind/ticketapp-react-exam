import { Link } from 'react-router-dom';
import './EventItem.css';

function EventItem({ event }) {
	const { id, name, price, where, when } = event;
	const [day, month] = when.date.split(' ');

	return (
		<Link
			to={`/event/${id}`}
			className="event-item-link"
			aria-label={`Read more about the event ${name} on ${when.date}`}>
			<article className="event-item">
				<header className="event-item__date">
					<time dateTime={`2025-03-${day.padStart(2, '0')}`}>
						<span className="event-item__day">{day}</span>
						<span className="event-item__month">
							{month.slice(0, 3).toUpperCase()}
						</span>
					</time>
				</header>

				<section className="event-item__content">
					<h2 className="event-item__title">{name}</h2>
					<p className="event-item__location">
						<address>{where}</address>
					</p>
					<p className="event-item__details">
						<p className="event-item__time-details">
							<time dateTime={when.from}>{when.from}</time> -
							<time dateTime={when.to}>{when.to}</time>
						</p>
						<p
							className="event-item__price-details"
							aria-label={`Pris: ${price} kronor`}>
							<strong>{price} sek</strong>
						</p>
					</p>
				</section>
			</article>
		</Link>
	);
}

export default EventItem;
