import './OrderSummaryPage.css';
import NavBar from '../../components/NavBar/NavBar';
import { useLocalStorageCart } from '../../hooks/useLocalStorageCart';
import TicketBox from '../../components/TicketBox/TicketBox';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function OrderSummaryPage() {
	const { tickets, clearCart } = useLocalStorageCart();

	const handlePurchase = (e) => {
		e.preventDefault();
		clearCart;
	};

	return (
		<section className="page page-order">
			<h1 className="page__header">Cart</h1>
			{tickets.length > 0 ? (
				<>
					<ul>
						{tickets.map((event, index) => (
							<TicketBox
								key={index}
								event={event}
								variant="info"
								startAmount={event.amount}
							/>
						))}{' '}
					</ul>
					<Button text="Purchase tickets" onClick={clearCart} />
				</>
			) : (
				<>
					<h2 className="page__sub-header">
						Your cart is empty <br />
					</h2>
					<Link to={`/all-events`} className="button">
						Browse events →
					</Link>
				</>
			)}
			<NavBar />
		</section>
	);
}

export default OrderSummaryPage;
