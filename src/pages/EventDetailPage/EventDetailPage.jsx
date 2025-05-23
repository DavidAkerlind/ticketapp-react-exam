import './EventDetailPage.css';
import { useFetch } from '../../API/useFetch';
import NavBar from '../../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import EventDetails from '../../components/EventDetails/EventDetails';
import TicketBox from '../../components/TicketBox/TicketBox';
import BackButton from '../../components/BackButton/BackButton';

function EventDetailPage() {
	const { id } = useParams();
	const { data } = useFetch();
	// samma här med vit flash
	// if (isLoading) return <p className="error-p">Loading events...</p>;
	// if (isError) return <p className="error-p">Someting went wrong</p>;

	const event = data?.find((event) => event.id.toString() === id);
	return (
		<section className="page page-event">
			<h1 className="page__header">Event</h1>
			<section className="page-event__header-section">
				<BackButton />
				<h2 className="page__sub-header">
					You are about to score <br />
					some tickets to
				</h2>
			</section>
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
