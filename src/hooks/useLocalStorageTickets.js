import { useEffect, useState } from 'react';

export const useLocalStorageTickets = () => {
	const [tickets, setTickets] = useState(() => {
		const stored = localStorage.getItem('tickets');
		return JSON.parse(stored) || [];
	});

	useEffect(() => {
		localStorage.setItem('tickets', JSON.stringify(tickets));
	}, [tickets]);

	const removeTickets = (ticketsToRemove) => {};
	const addTickets = (ticketsToAdd) => {};

	return { tickets, addTickets, removeTickets };
};
