import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useTicketStore } from '../../store/useTicketStore';
import './EventItem.css';

function EventItem({ event, variant = 'price', amount, eventId }) {
	const { id, name, price, where, when } = event;
	const [day, month] = when.date.split(' ');

	const { removeUsedTickets } = useTicketStore();
	const handleRemove = (e) => {
		e.preventDefault();
		removeUsedTickets(eventId);
	};

	return (
		<Link
			to={variant === 'price' ? `/event/${id}` : `/tickets/${eventId}`}
			className="event-item-link"
			aria-label={
				variant === 'price'
					? `Read more about the event: ${name} on ${when.date}`
					: `show your tickets for the event: ${event.eventName} `
			}>
			<article className="event-item">
				<header className="event-item__date">
					<p dateTime={`2025-03-${day.padStart(2, '0')}`}>
						<span className="event-item__day">{day}</span>
						<span className="event-item__month">
							{month.slice(0, 3).toUpperCase()}
						</span>
					</p>
				</header>

				<section className="event-item__content">
					{variant === 'ticket' ? (
						<div className="event-details__flex">
							<h2 className="event-item__title">
								{name ? name : event.eventName}
							</h2>
							<Button
								variant="remove"
								text={'⨉'}
								onClick={handleRemove}
							/>
						</div>
					) : (
						<h2 className="event-item__title">
							{name ? name : event.eventName}
						</h2>
					)}

					<p className="event-item__location">{where}</p>
					<section className="event-item__details">
						<p className="event-item__time-details">
							<time dateTime={when.from}>{when.from}</time> -
							<time dateTime={when.to}>{when.to}</time>
						</p>
						{variant === 'price' ? (
							<p
								className="event-item__price-details"
								aria-label={`Pris: ${price} kronor`}>
								<strong>{price} sek</strong>
							</p>
						) : (
							<h3
								style={{ color: 'var(--pink)' }}
								className="event-item__price-details"
								aria-label={`Amount of tickets: ${amount}`}>
								<strong> Tickets: {amount}</strong>
							</h3>
						)}
					</section>
				</section>
			</article>
			{variant === 'ticket' ? (
				<p
					to={`/tickets/${eventId}`}
					className="button button--show-tickets">
					Show {amount} tickets →
				</p>
			) : (
				''
			)}
		</Link>
	);
}

export default EventItem;
