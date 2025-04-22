import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TicketCard from '../../components/TicketCard/TicketCard';
import { useCartStore } from '../../store/useCartStore';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import './TicketsPage.css';

function TicketsPage() {
	const { tickets, clearTickets } = useCartStore();
	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	// Swipe-handlers
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (currentIndex < allTickets.length - 1) {
				setDirection(1);
				setCurrentIndex((prev) => prev + 1);
			}
		},
		onSwipedRight: () => {
			if (currentIndex > 0) {
				setDirection(-1);
				setCurrentIndex((prev) => prev - 1);
			}
		},
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // gör att man kan swipa även med mus
	});

	const variants = {
		enter: (dir) => ({
			x: dir > 0 ? 300 : -300,
			opacity: 0,
			position: 'absolute',
		}),
		center: {
			x: 0,
			opacity: 1,
			position: 'relative',
		},
		exit: (dir) => ({
			x: dir > 0 ? -300 : 300,
			opacity: 0,
			position: 'absolute',
		}),
	};

	return (
		<section className="page page-tickets" {...handlers}>
			<h1 className="page__header">Your tickets</h1>

			<div className="ticket-gallery">
				<AnimatePresence custom={direction}>
					<motion.div
						key={allTickets[currentIndex].ticketId}
						variants={variants}
						custom={direction}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.4 }}
						className="ticket-card-wrapper">
						<TicketCard ticket={allTickets[currentIndex]} />
					</motion.div>
				</AnimatePresence>
				<div className="ticket-gallery__dots">
					{allTickets.map((_, index) => (
						<span
							key={index}
							className={`dot ${
								index === currentIndex ? 'active' : ''
							}`}
						/>
					))}
				</div>
			</div>

			<NavBar />
		</section>
	);
}

export default TicketsPage;

// // ============================== Utan swipe ==============================
// function TicketsPage() {
// 	const { tickets, clearTickets } = useCartStore();
// 	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());

// 	return (
// 		<section className="page page-tickets">
// 			<h1 className="page__header">Your tickets</h1>
// 			{allTickets.map((ticket, index) => (
// 				<TicketCard key={index} ticket={ticket} />
// 			))}

// 			<NavBar />
// 		</section>
// 	);
// }

// export default TicketsPage;
