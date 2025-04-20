import { useEffect } from 'react';
import './TicketbBox.css';

function TicketBox({ price, quantity, handleIncrease, handleDecrease }) {
	let totalPrice = price;
	useEffect(() => {
		totalPrice = price * quantity;
	}, [price]);

	return (
		<section
			className="event-details__pricebox"
			aria-label="Choose ticketamount">
			<p className="event-details__total">{totalPrice} sek</p>
			<div className="event-details__quantity">
				<button
					onClick={handleDecrease}
					aria-label="Decrease ticketamount">
					−
				</button>
				<span>{quantity}</span>
				<button
					onClick={handleIncrease}
					aria-label="Increase ticketamount">
					+
				</button>
			</div>
		</section>
	);
}

export default TicketBox;
