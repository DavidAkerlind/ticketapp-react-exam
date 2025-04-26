import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useTicketStore } from '../../store/useTicketStore';
import './TicketsPage.css';
import '../../components/Button/Button.css';
import { Link, useParams } from 'react-router-dom';
import TicketCarousel from '../../components/TicketCarousel/TicketCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { isEventOver } from '../../utils/utils.js';

function TicketsPage() {
	const { id } = useParams();
	const { tickets, removeUsedTickets } = useTicketStore();
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
							<FontAwesomeIcon icon={faReply} />
							Back to my events
						</Link>
						{isEventOver(allTickets[currentIndex]) ? (
							<Link
								onClick={handleRemove}
								className="button button--remove-big button--small">
								Remove used tickets
								<FontAwesomeIcon icon={faTrash} />
							</Link>
						) : (
							''
						)}
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
							<FontAwesomeIcon icon={faReply} />
							Back to my events
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
