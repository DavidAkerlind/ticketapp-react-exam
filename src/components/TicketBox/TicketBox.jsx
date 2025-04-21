import { useEffect, useState } from 'react';
import './TicketBox.css';
import { useLocalStorageCart } from '../../hooks/useLocalStorageCart';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

function TicketBox({ event, variant = 'price', startAmount = 1 }) {
	const [totalPrice, setTotalPrice] = useState(event.price);
	const [amount, setAmount] = useState(startAmount);
	const { addTickets, updateAmount, removeTickets } = useCartStore();

	useEffect(() => {
		setTotalPrice(event.price * amount);
	}, [amount]);

	const handleIncrease = (e) => {
		e.preventDefault();
		setAmount((q) => q + 1);
	};
	const handleDecrease = (e) => {
		e.preventDefault();
		setAmount((q) => (q > 1 ? q - 1 : 1));
	};

	const handleAddToCart = (e) => {
		// e.preventDefault();
		addTickets({
			id: event.id,
			name: event.name,
			when: event.when,
			price: event.price,
			amount: amount,
		});
		setAmount(1);
	};

	// ===============IN CART ====================

	const handleIncreaseInCart = (e) => {
		e.preventDefault();
		setAmount((q) => q + 1);
		updateAmount(event.id, amount + 1);
	};

	const handleDecreaseInCart = (e) => {
		e.preventDefault();
		setAmount((q) => q - 1);
		updateAmount(event.id, amount - 1);
	};

	const handleRemove = (e) => {
		e.preventDefault();
		removeTickets(event.id);
		updateAmount(event.id, 0);
	};

	// Price-variant
	if (variant === 'price') {
		return (
			<>
				<section
					className="event-details__pricebox"
					aria-label="Choose ticket-amount">
					<p className="event-details__total">{totalPrice} sek</p>
					<div className="event-details__quantity">
						<button
							className="event-details__button event-details__button--increase"
							onClick={handleDecrease}
							aria-label="Decrease ticket-amount">
							−
						</button>
						<span className="event-details__quantity-amount">
							{amount}
						</span>
						<button
							className="event-details__button event-details__button--decrease"
							onClick={handleIncrease}
							aria-label="Increase ticket-amount">
							+
						</button>
					</div>
				</section>

				<Link
					className="button"
					to="/order-summary"
					onClick={handleAddToCart}>
					Add to cart
				</Link>
			</>
		);
	}

	// Info-variant
	if (variant === 'info') {
		return (
			<section
				className="event-details__pricebox event-details__pricebox--big"
				aria-label="Choose ticket-amount"
				style={{ textAlign: 'left' }}>
				<div className="event-details__flex">
					<h3 className="page__header page__header--small">
						{event.name}
					</h3>
					<Button
						variant="remove"
						text={'⨉'}
						onClick={handleRemove}
					/>
				</div>
				<p className="event-details__datetime event-details__datetime--small">
					{event.when.date} kl {event.when.from} - {event.when.to}
				</p>

				<div className="event-details__quantity">
					<button
						className="event-details__button event-details__button--increase"
						onClick={handleDecreaseInCart}
						aria-label="Decrease ticket-amount">
						−
					</button>
					<span className="event-details__quantity-amount">
						{amount}
					</span>
					<button
						className="event-details__button event-details__button--decrease"
						onClick={handleIncreaseInCart}
						aria-label="Increase ticket-amount">
						+
					</button>
				</div>
			</section>
		);
	}
}

export default TicketBox;
