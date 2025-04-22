import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TicketCard from '../../components/TicketCard/TicketCard';
import { useCartStore } from '../../store/useCartStore';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/Button/Button';
import './TicketsPage.css';
import { Link } from 'react-router-dom';

function TicketsPage() {
	const { tickets, clearTickets } = useCartStore();
	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const handleRemove = () => {
		setAllTickets([]);
		clearTickets();
		setCurrentIndex(0);
	};

	// Swipe handlers
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
		trackMouse: true,
	});

	// Animation variants
	const variants = {
		enter: (dir) => ({
			x: dir > 0 ? 300 : -300,
			opacity: 0,
			scale: 0.9,
			rotateY: dir > 0 ? 40 : -40,
			position: 'absolute',
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			position: 'relative',
		},
		exit: (dir) => ({
			x: dir > 0 ? -300 : 300,
			opacity: 0,
			scale: 0.9,
			rotateY: dir > 0 ? -40 : 40,
			position: 'absolute',
		}),
	};

	return (
		<section className="page page-tickets" {...handlers}>
			<h1 className="page__header">Your tickets</h1>

			<div className="ticket-gallery">
				{allTickets.length > 0 ? (
					<>
						<AnimatePresence custom={direction} mode="popLayout">
							<motion.div
								key={allTickets[currentIndex]?.ticketId}
								variants={variants}
								custom={direction}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ duration: 0.3 }}
								className="ticket-motion-wrapper">
								<TicketCard ticket={allTickets[currentIndex]} />
							</motion.div>
						</AnimatePresence>

						<div className="ticket-gallery__dots">
							{allTickets.map((_, idx) => (
								<span
									key={idx}
									className={`dot ${
										idx === currentIndex ? 'active' : ''
									}`}
								/>
							))}
						</div>

						<Link
							onClick={handleRemove}
							className="button button--remove-big">
							Remove all tickets
						</Link>
					</>
				) : (
					<>
						<h2 className="page__sub-header">
							You have no tickets
						</h2>

						<Link to={`/all-events`} className="button">
							Browse events →
						</Link>
					</>
				)}
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

// // ============================== Med swipe ==============================

// function TicketsPage() {
// 	const { tickets, clearTickets } = useCartStore();
// 	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [direction, setDirection] = useState(0);

// 	const handleRemove = () => {
// 		setAllTickets({});
// 		clearTickets();
// 	};

// 	// Swipe-handlers
// 	const handlers = useSwipeable({
// 		onSwipedLeft: () => {
// 			if (currentIndex < allTickets.length - 1) {
// 				setDirection(1);
// 				setCurrentIndex((prev) => prev + 1);
// 			}
// 		},
// 		onSwipedRight: () => {
// 			if (currentIndex > 0) {
// 				setDirection(-1);
// 				setCurrentIndex((prev) => prev - 1);
// 			}
// 		},
// 		preventDefaultTouchmoveEvent: true,
// 		trackMouse: true, // gör att man kan swipa även med mus
// 	});

// 	const variants = {
// 		enter: (dir) => ({
// 			x: dir > 0 ? 350 : -350,
// 			opacity: 0,
// 			position: 'absolute',
// 			top: 0,
// 		}),
// 		center: {
// 			x: 0,
// 			opacity: 1,
// 			position: 'relative',
// 			top: 0,
// 		},
// 		exit: (dir) => ({
// 			x: dir > 0 ? -350 : 350,
// 			opacity: 0,
// 			position: 'absolute',
// 			top: 0,
// 		}),
// 	};

// 	return (
// 		<section className="page page-tickets" {...handlers}>
// 			<h1 className="page__header">Your tickets</h1>

// 			{allTickets.length > 0 ? (
// 				<>
// 					<AnimatePresence custom={direction}>
// 						<motion.div
// 							key={allTickets[currentIndex].ticketId}
// 							variants={variants}
// 							custom={direction}
// 							initial="enter"
// 							animate="center"
// 							exit="exit"
// 							transition={{ duration: 0.3 }}
// 							className="ticket-card-wrapper">
// 							<TicketCard
// 								key={currentIndex}
// 								ticket={allTickets[currentIndex]}
// 							/>
// 						</motion.div>
// 					</AnimatePresence>
// 					<section className="ticket-gallery__dots">
// 						{allTickets.map((_, index) => (
// 							<span
// 								key={index}
// 								className={`dot ${
// 									index === currentIndex ? 'active' : ''
// 								}`}
// 							/>
// 						))}
// 					</section>

// 					<Link
// 						className="button button--remove-big"
// 						onClick={handleRemove}>
// 						Remove all tickets
// 					</Link>
// 				</>
// 			) : (
// 				<>
// 					<h2 className="page__sub-header">You have no tickets</h2>
// 					<Link to={`/all-events`} className="button">
// 						Browse events →
// 					</Link>
// 				</>
// 			)}

// 			<NavBar />
// 		</section>
// 	);
// }

// export default TicketsPage;
