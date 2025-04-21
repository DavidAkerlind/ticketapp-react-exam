import './EventDetailPage.css';
import { useFetch } from '../../hooks/useFetch';
import NavBar from '../../components/NavBar/NavBar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EventDetails from '../../components/EventDetails/EventDetails';
import TicketBox from '../../components/TicketBox/TicketBox';
import Button from '../../components/Button/Button';
import { useLocalStorageCart } from '../../hooks/useLocalStorageCart';

function EventDetailPage() {
	const { id } = useParams();
	const { data, isLoading, isError } = useFetch();
	const [amount, setAmount] = useState(1);
	const { tickets, addTickets, updateAmount, removeTickets, clearCart } =
		useLocalStorageCart();

	if (isLoading) return <p className="error-p">Loading events...</p>;
	if (isError) return <p className="error-p">Someting went wrong</p>;

	const event = data?.find((event) => event.id.toString() === id);
	console.log(event);

	const handleIncrease = (e) => {
		e.preventDefault();
		setAmount((q) => q + 1);
	};
	const handleDecrease = (e) => {
		e.preventDefault();
		setAmount((q) => (q > 1 ? q - 1 : 1));
	};

	const handleAddToCart = (e) => {
		e.preventDefault();
		addTickets({
			id: event.id,
			name: event.name,
			when: event.when,
			price: event.price,
			amount: amount,
		});
		setAmount(1);
	};

	return (
		<section className="page page-event">
			<h1 className="page__header">Event</h1>
			<h2 className="page__sub-header">
				You are about to score <br />
				some tickets to
			</h2>
			{event ? (
				<form>
					<EventDetails event={event} />
					<TicketBox
						price={event.price}
						amount={amount}
						handleIncrease={handleIncrease}
						handleDecrease={handleDecrease}
						event={event}
						variant="price"
					/>
					<Button text="Add to cart" onClick={handleAddToCart} />
				</form>
			) : (
				<p className="error-p">Loading...</p>
			)}

			<NavBar />
		</section>
	);
}

export default EventDetailPage;
