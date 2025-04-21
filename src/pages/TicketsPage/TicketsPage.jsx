import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TicketCard from '../../components/TicketCard/TicketCard';
import { useCartStore } from '../../store/useCartStore';
import './TicketsPage.css';

function TicketsPage() {
	const { tickets, clearTickets } = useCartStore();
	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());

	return (
		<section className="page page-tickets">
			<h1 className="page__header">Your tickets</h1>
			{allTickets.map((ticket, index) => (
				<TicketCard key={index} ticket={ticket} />
			))}

			<NavBar />
		</section>
	);
}

export default TicketsPage;

// import { useTickets } from "../context/TicketContext";
// import TicketCard from "../components/TicketCard";

// const TicketsPage = () => {
//   const { tickets } = useTickets();
//   const eventId = "VM2RSbKQ841XiDhyxfJs2npR"; // Du kan göra detta dynamiskt också
//   const currentTickets = tickets[eventId] || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-400 p-4">
//       <div className="flex flex-col items-center">
//         {currentTickets.map((ticket) => (
//           <TicketCard key={ticket.ticketId} ticket={ticket} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TicketsPage;
