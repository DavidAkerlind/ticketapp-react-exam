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
	// samma här med vit flash
	// if (isLoading) return <p className="error-p">Loading events...</p>;
	// if (isError) return <p className="error-p">Someting went wrong</p>;

	const event = data?.find((event) => event.id.toString() === id);

	const { tickets, clearCart, generateTicketsFromCart } = useCartStore();
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
					<TicketBox event={event} variant="price" />
				</form>
			) : (
				<p className="error-p">Loading...</p>
			)}

			<NavBar />
		</section>
	);
}

export default EventDetailPage;
