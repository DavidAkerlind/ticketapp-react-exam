import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TicketCard from '../../components/TicketCard/TicketCard';
import { useCartStore } from '../../store/useCartStore';
import { useSwipeable } from 'react-swipeable';
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import './TicketsPage.css';
import { Link, useParams } from 'react-router-dom';
import GalleryDots from '../../components/GalleryDots/GalleryDots';
import { ticketAnimationVariants } from '../../utils/animations';
import TicketCarousel from '../../components/TicketCarousel/TicketCarousel';

function TicketsPage() {
	const { id } = useParams();
	const { tickets, clearTickets, removeUsedTickets } = useCartStore();
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
