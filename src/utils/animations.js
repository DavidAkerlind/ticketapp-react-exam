export const ticketAnimationVariants = {
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
