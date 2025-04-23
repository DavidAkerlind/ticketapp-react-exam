import './GalleryDots.css';

function GalleryDots({ totalDots, currentIndex, onDotClick }) {
	return (
		<section className="ticket-gallery__dots">
			{Array.from({ length: totalDots }).map((_, idx) => (
				<button
					key={idx}
					onClick={() => onDotClick(idx)}
					className={`dot ${idx === currentIndex ? 'active' : ''}`}
					aria-label={`Go to ticket ${idx + 1}`}
					aria-current={idx === currentIndex ? 'true' : 'false'}
				/>
			))}
		</section>
	);
}

export default GalleryDots;
