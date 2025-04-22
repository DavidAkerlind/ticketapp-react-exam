import Barcode from 'react-barcode';
import './TicketCard.css';

function TicketCard({ ticket }) {
	return (
		<article className="ticket-card">
			<section className="ticket-card__header">
				<p className="ticket-card__sub-header">WHAT</p>

				<h2
					aria-label="Event-name"
					className="page__header page__header--small page__header--no-margin">
					{ticket.eventName}
				</h2>
			</section>

			<section className="ticket-card__where">
				<p className="ticket-card__sub-header">WHERE</p>

				<h2
					aria-label="Event-location"
					className="ticket-card__section-title">
					{ticket.where}
				</h2>
			</section>

			<section className="ticket-card__when-section">
				<section className="ticket-card__when-item">
					<p className="ticket-card__sub-header">WHERE</p>

					<h2
						aria-label="Event-location"
						className="ticket-card__section-title">
						{ticket.when.date.slice(0, 6)}
					</h2>
				</section>
				<section className="ticket-card__when-item">
					<p className="ticket-card__sub-header">FROM</p>

					<h2
						aria-label="Event-location"
						className="ticket-card__section-title">
						{ticket.when.from}
					</h2>
				</section>
				<section className="ticket-card__when-item">
					<p className="ticket-card__sub-header">TO</p>

					<h2
						aria-label="Event-location"
						className="ticket-card__section-title">
						{ticket.when.to}
					</h2>
				</section>
			</section>

			<section className="ticket-card__seating">
				<p className="ticket-card__sub-header">INFO</p>

				<p aria-label="seat info" className="ticket-card__seat-info">
					Section {ticket.section} - seat {ticket.seat}
				</p>
			</section>

			<section className="ticket-card__barcode-id">
				<Barcode
					value={ticket.ticketId}
					height={60}
					displayValue={false}
					background="#e0e0e0"
					lineColor="#2d2d2d"
					aria-label={`Ticket barcode/id ${ticket.ticketId}`}
				/>
				<p className="ticket-card__ticket-id">#{ticket.ticketId}</p>
			</section>
		</article>
	);
}

export default TicketCard;
