import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ticketAnimationVariants } from '../../utils/animations';
import TicketCard from '../TicketCard/TicketCard';
import GalleryDots from '../GalleryDots/GalleryDots';
import './TicketCarousel.css';

function TicketCarousel({
	tickets,
	currentIndex,
	setCurrentIndex,
	direction,
	setDirection,
}) {
	// försökte med någon peek effekt på de näst kommande korten men buggade bara massor
	const x = useMotionValue(0);
	const prevTransform = useTransform(x, [-200, 0, 200], [-200, -255, 100]);
	const nextTransform = useTransform(x, [-200, 0, 200], [-200, -255, 100]);

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (currentIndex < tickets.length - 1) {
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

	const handleDotClick = (index) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	return (
		<section className="ticket-gallery" {...handlers}>
			<section className="tickets-container">
				{currentIndex > 0 && (
					<motion.div
						className="ticket-preview previous"
						style={{
							left: prevTransform,
						}}>
						<TicketCard ticket={tickets[currentIndex - 1]} />
					</motion.div>
				)}

				<AnimatePresence custom={direction} mode="popLayout">
					<motion.div
						key={tickets[currentIndex]?.ticketId}
						variants={ticketAnimationVariants}
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
								info.offset.x < -swipeConfidenceThreshold &&
								currentIndex < tickets.length - 1
							) {
								setDirection(1);
								setCurrentIndex(currentIndex + 1);
							} else if (
								info.offset.x > swipeConfidenceThreshold &&
								currentIndex > 0
							) {
								setDirection(-1);
								setCurrentIndex(currentIndex - 1);
							}
						}}>
						<TicketCard ticket={tickets[currentIndex]} />
					</motion.div>
				</AnimatePresence>

				{currentIndex < tickets.length - 1 && (
					<motion.div
						className="ticket-preview next"
						style={{
							right: nextTransform,
						}}>
						<TicketCard ticket={tickets[currentIndex + 1]} />
					</motion.div>
				)}
			</section>

			<GalleryDots
				totalDots={tickets.length}
				currentIndex={currentIndex}
				onDotClick={handleDotClick}
			/>
		</section>
	);
}

export default TicketCarousel;
