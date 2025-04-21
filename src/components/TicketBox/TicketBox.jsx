import { useEffect, useState } from 'react';
import './TicketBox.css';

function TicketBox({
	price,
	amount,
	handleIncrease,
	handleDecrease,
	event,
	variant = 'price',
}) {
	const [totalPrice, setTotalPrice] = useState(price);

	useEffect(() => {
		setTotalPrice(price * amount);
	}, [amount]);

	if (variant === 'price') {
		return (
			<section
				className="event-details__pricebox"
				aria-label="Choose ticketamount">
				<p className="event-details__total">{totalPrice} sek</p>
				<div className="event-details__quantity">
					<button
						className="event-details__button event-details__button--increase"
						onClick={handleDecrease}
						aria-label="Decrease ticketamount">
						−
					</button>
					<span className="event-details__quantity-amount">
						{amount}
					</span>
					<button
						className="event-details__button event-details__button--decrease"
						onClick={handleIncrease}
						aria-label="Increase ticketamount">
						+
					</button>
				</div>
			</section>
		);
	}

	// Info-variant
	if (variant === 'info') {
		return (
			<section
				className="event-details__pricebox event-details__pricebox--big"
				aria-label="Choose ticketamount"
				style={{ textAlign: 'left' }}>
				<h3 className="page__header page__header--small">
					{event.name}
				</h3>
				<p className="event-details__datetime event-details__datetime--small">
					{event.when.date} kl {event.when.from} - {event.when.to}
				</p>
				<div className="event-details__quantity">
					<button
						className="event-details__button event-details__button--increase"
						onClick={handleDecrease}
						aria-label="Decrease ticketamount">
						−
					</button>
					<span className="event-details__quantity-amount">
						{amount}
					</span>
					<button
						className="event-details__button event-details__button--decrease"
						onClick={handleIncrease}
						aria-label="Increase ticketamount">
						+
					</button>
				</div>
			</section>
		);
	}
}

export default TicketBox;
