import { useEffect, useState } from 'react';

export const useLocalStorageCart = () => {
	const [tickets, setTickets] = useState(() => {
		const stored = localStorage.getItem('cart');
		return JSON.parse(stored) || [];
	});

	useEffect(() => {
		localStorage.setItem('tickets', JSON.stringify(tickets));
	}, [tickets]);

	const removeTickets = (ticketsToRemove) => {};
	const addTickets = (ticketsToAdd) => {};

	return { tickets, addTickets, removeTickets };
};
