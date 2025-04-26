export const generateTicketId = () => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return Array.from(
		{ length: 5 },
		() => chars[Math.floor(Math.random() * chars.length)]
	).join('');
};

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
		where: event.where,
	}));
};

export const isEventOver = (event) => {
	console.log(event);
	const now = new Date();

	const { date, to } = event.when;

	// Hämta dag och månadsnamn från eventets datum
	const [day, monthName] = date.split(' ');

	// Månader
	const monthNames = [
		'Januari',
		'Februari',
		'Mars',
		'April',
		'Maj',
		'Juni',
		'Juli',
		'Augusti',
		'September',
		'Oktober',
		'November',
		'December',
	];
	const monthIndex = monthNames.findIndex(
		(month) => month.toLowerCase() === monthName.toLowerCase()
	);

	if (monthIndex === -1) {
		console.error('Unknown month:', monthName);
		return false; // Om vi inte hittar månaden, visa inte knappen
	}

	// Splitta sluttiden ("23:00") till timmar och minuter
	const [hours, minutes] = to.split(':').map(Number);

	// Skapa ett Date-objekt för eventets slut
	const eventEndDate = new Date();
	eventEndDate.setMonth(monthIndex);
	eventEndDate.setDate(Number(day));
	eventEndDate.setHours(hours);
	eventEndDate.setMinutes(minutes);
	eventEndDate.setSeconds(0);
	eventEndDate.setMilliseconds(0);

	// Jämför: är tiden just nu senare än tiden för eventets slut? Om ja return true om inte false
	return now > eventEndDate;
};
