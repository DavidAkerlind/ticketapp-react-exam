import Barcode from 'react-barcode';
import './TicketCard.css';

function TicketCard({ ticket }) {
	console.log(ticket);
	return (
		<article className="ticket-card">
			<header className="ticket-card__header">
				<h3 className="ticket-card__title">WHAT</h3>

				<h2 className="page__header page__header--small">
					{ticket.eventName}
				</h2>
			</header>

			<section className="ticket-card__where">
				<p className="ticket-card__location">{}</p>
			</section>

			<section className="ticket-card__seating">
				<p className="ticket-card__seat-info">
					Section {ticket.section} - seat {ticket.seat}, bring
					umbrella
				</p>
			</section>

			<footer className="ticket-card__footer">
				<Barcode
					value={ticket.ticketId}
					height={40}
					displayValue={false}
					aria-label={`Ticket barcode/id ${ticket.ticketId}`}
				/>
				<p className="ticket-card__ticket-id">#{ticket.ticketId}</p>
			</footer>
		</article>
	);
}

export default TicketCard;
