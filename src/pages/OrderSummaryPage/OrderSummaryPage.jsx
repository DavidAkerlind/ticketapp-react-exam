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

					<Link
						className="button"
						to="/tickets"
						onClick={handlePurchase}>
						Purchase tickets
					</Link>
					{/* <Button text="Purchase tickets" onClick={handlePurchase} /> */}
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
