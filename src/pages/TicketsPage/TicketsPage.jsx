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
import { Link } from 'react-router-dom';

function TicketsPage() {
	const { tickets, clearTickets } = useCartStore();
	const [allTickets, setAllTickets] = useState(Object.values(tickets).flat());
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	// === testing ===
	const x = useMotionValue(0);
	const prevTransform = useTransform(x, [-200, 0, 200], [-150, -230, -30]);
	const nextTransform = useTransform(x, [-200, 0, 200], [-30, -230, -150]);
	const prevRotate = useTransform(x, [-200, 0, 200], [30, 45, 60]);
	const nextRotate = useTransform(x, [-200, 0, 200], [-60, -45, -30]);

	// === testing ===
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
			opacity: 1,
			scale: 0.9,
			rotateY: dir > 0 ? 45 : -45,
			position: 'absolute',
			zIndex: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			position: 'relative',
			zIndex: 1,
		},
		exit: (dir) => ({
			x: dir > 0 ? -300 : 300,
			opacity: 1,
			scale: 0.9,
			rotateY: dir > 0 ? -45 : 45,
			position: 'absolute',
			zIndex: 0,
		}),
	};

	// Om man klickar på en dot så tas man til dennes ticket index
	const handleDotClick = (index) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	return (
		<section className="page page-tickets" {...handlers}>
			<h1 className="page__header page__header--purple">My tickets</h1>
			{allTickets.length > 0 ? (
				<section className="ticket-gallery">
					{' '}
					<div className="tickets-container">
						{/* Föregående kort */}
						{currentIndex > 0 && (
							<motion.div
								className="ticket-preview previous"
								style={{
									left: prevTransform,
									rotateY: prevRotate,
								}}>
								<TicketCard
									ticket={allTickets[currentIndex - 1]}
								/>
							</motion.div>
						)}
						<AnimatePresence custom={direction} mode="popLayout">
							<motion.div
								key={allTickets[currentIndex]?.ticketId}
								variants={variants}
								custom={direction}
								initial="enter"
								animate="center"
								exit="exit"
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.2}
								transition={{
									duration: 0.2,
									type: 'spring',
									stiffness: 300,
									damping: 27,
								}}
								className="ticket-motion-wrapper"
								onDragEnd={(event, info) => {
									const swipeConfidenceThreshold = 100;

									if (
										info.offset.x <
											-swipeConfidenceThreshold &&
										currentIndex < allTickets.length - 1
									) {
										setDirection(1);
										setCurrentIndex(currentIndex + 1);
									} else if (
										info.offset.x >
											swipeConfidenceThreshold &&
										currentIndex > 0
									) {
										setDirection(-1);
										setCurrentIndex(currentIndex - 1);
									}
								}}>
								<TicketCard ticket={allTickets[currentIndex]} />
							</motion.div>
						</AnimatePresence>
						{/* Nästa kort */}
						{currentIndex < allTickets.length - 1 && (
							<motion.div
								className="ticket-preview next"
								style={{
									right: nextTransform,
									rotateY: nextRotate,
								}}>
								<TicketCard
									ticket={allTickets[currentIndex + 1]}
								/>
							</motion.div>
						)}
					</div>
					<div className="ticket-gallery__dots">
						{allTickets.map((_, idx) => (
							<span
								key={idx}
								onClick={() => handleDotClick(idx)}
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
				</section>
			) : (
				<>
					<h2 className="page__sub-header">You have no tickets</h2>

					<Link to={`/all-events`} className="button button--browse">
						Browse events →
					</Link>
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
