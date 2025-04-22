import './OrderSummaryPage.css';
import NavBar from '../../components/NavBar/NavBar';
import { useLocalStorageCart } from '../../hooks/useLocalStorageCart';
import TicketBox from '../../components/TicketBox/TicketBox';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

function OrderSummaryPage() {
	const { clearCart, generateTicketsFromCart, cartEvents } = useCartStore();

	const handlePurchase = (e) => {
		generateTicketsFromCart();
		clearCart();
	};
	// få totalPrice på varukorgen en snygg oneliner?
	const totalPrice = cartEvents.reduce(
		(acc, event) => acc + event.price * event.amount,
		0
	);

	return (
		<section className="page page-order">
			<h1 className="page__header">Cart</h1>
			{cartEvents.length > 0 ? (
				<>
					<ul className="page-order__list">
						{cartEvents.map((event, index) => (
							<TicketBox
								key={index}
								event={event}
								variant="info"
								startAmount={event.amount}
							/>
						))}
					</ul>

					<section className="page-order__summary-section">
						<h2 className="page__sub-header">Total order cost</h2>
						<p className="event-details__total">{totalPrice} sek</p>
					</section>

					<Link
						className="button"
						to="/tickets"
						onClick={handlePurchase}>
						Purchase tickets
					</Link>
				</>
			) : (
				<>
					<h2 className="page__sub-header">Your cart is empty</h2>
					<Link to={`/all-events`} className="button button--browse">
						Browse events →
					</Link>
				</>
			)}
			<NavBar />
		</section>
	);
}

export default OrderSummaryPage;
