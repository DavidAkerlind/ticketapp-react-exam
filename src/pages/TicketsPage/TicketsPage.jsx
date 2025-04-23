import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useCartStore } from '../../store/useCartStore';
import './TicketsPage.css';
import { Link, useParams } from 'react-router-dom';
import TicketCarousel from '../../components/TicketCarousel/TicketCarousel';

function TicketsPage() {
	const { id } = useParams();
	const { tickets, removeUsedTickets } = useCartStore();
	const eventTickets = tickets[id] || [];
	const [allTickets, setAllTickets] = useState(eventTickets);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const handleRemove = () => {
		setAllTickets([]);
		removeUsedTickets(id);
		setCurrentIndex(0);
	};

	return (
		<section className="page page-tickets">
			<h1 className="page__header page__header--purple">My tickets</h1>
			{allTickets.length > 0 ? (
				<section className="ticket-gallery">
					<TicketCarousel
						tickets={allTickets}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
						direction={direction}
						setDirection={setDirection}
					/>
					<section className="page-tickets__buttons">
						<Link
							to={`/my-events`}
							className="button button--browse button--small">
							↩ Back to my events
						</Link>
						<Link
							onClick={handleRemove}
							className="button button--remove-big button--small">
							Remove used tickets
						</Link>
					</section>
				</section>
			) : (
				<>
					<h2 className="page__sub-header">
						You have no tickets <br /> for this event
					</h2>
					<section className="page-tickets__buttons">
						<Link
							to={`/my-events`}
							className="button button--browse button--small">
							↩ Back to my events
						</Link>
						<Link
							to={`/all-events`}
							className="button button--browse button--small">
							Browse events →
						</Link>
					</section>
				</>
			)}
			<NavBar />
		</section>
	);
}

export default TicketsPage;
