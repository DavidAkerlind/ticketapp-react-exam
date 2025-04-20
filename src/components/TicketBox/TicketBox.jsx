import { useEffect, useState } from 'react';
import './TicketBox.css';

function TicketBox({ price, quantity, handleIncrease, handleDecrease }) {
	const [totalPrice, setTotalPrice] = useState(price);

	useEffect(() => {
		setTotalPrice(price * quantity);
	}, [quantity]);

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
					{quantity}
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

export default TicketBox;
