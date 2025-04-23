import NavBar from '../../components/NavBar/NavBar';
import './EventSelectionPage.css';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import SelectEventList from '../../components/SelectEventList/SelectEventList';

function EventSelectionPage() {
	const { tickets } = useCartStore();
	const hasTickets = Object.keys(tickets).length > 0;

	return (
		<section className="page page-event-selection">
			<h1 className="page__header">My Events</h1>

			{hasTickets ? (
				<>
					<SelectEventList tickets={tickets} />
					<Link to="/all-events" className="button button--browse">
						Browse events →
					</Link>
				</>
			) : (
				<>
					<h2 className="page__sub-header">No tickets found</h2>

					<Link to="/all-events" className="button button--browse">
						Browse events →
					</Link>
				</>
			)}

			<NavBar />
		</section>
	);
}

export default EventSelectionPage;
