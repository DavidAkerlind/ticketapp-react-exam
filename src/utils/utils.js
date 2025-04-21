// utils.js

export const generateTicketId = () => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return Array.from(
		{ length: 5 },
		() => chars[Math.floor(Math.random() * chars.length)]
	).join('');
};
//	    'H',
// 		'I',
// 		'J',
// 		'K',
// 		'L',
// 		'M',
// 		'N',
// 		'O',
// 		'P',
// 		'Q',
// 		'R',
//
const getRandomSection = () => {
	const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	return sections[Math.floor(Math.random() * sections.length)];
};

export const generateTicketsForEvent = (event) => {
	const section = getRandomSection();
	const baseSeat = Math.floor(Math.random() * 100) + 1;
	console.log('genererar');

	return Array.from({ length: event.amount }, (_, i) => ({
		ticketId: generateTicketId(),
		eventId: event.id,
		eventName: event.name,
		date: event.date,
		section,
		seat: baseSeat + i,
		when: event.when,
	}));
};
