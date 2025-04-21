import { useEffect, useState } from 'react';

export const useLocalStorageCart = () => {
	const [tickets, setTickets] = useState(() => {
		const stored = localStorage.getItem('tickets');
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		localStorage.setItem('tickets', JSON.stringify(tickets));
	}, [tickets]);

	// 🟢 Lägg till biljetter till varukorgen
	const addTickets = (ticketsToAdd) => {
		setTickets((prev) => {
			const existing = prev.find((item) => item.id === ticketsToAdd.id);
			if (existing) {
				// Öka bara antalet
				return prev.map((item) =>
					item.id === ticketsToAdd.id
						? { ...item, amount: item.amount + ticketsToAdd.amount }
						: item
				);
			} else {
				// Lägg till ny post
				return [...prev, ticketsToAdd];
			}
		});
	};

	// Ta bort en hel post
	const removeTickets = (eventId) => {
		setTickets((prev) => prev.filter((item) => item.eventId !== eventId));
	};

	// 🔁 Uppdatera antalet biljetter i varukorgen
	const updateAmount = (eventId, newAmount) => {
		if (newAmount <= 0) {
			removeTickets(eventId);
			return;
		}

		setTickets((prev) =>
			prev.map((item) =>
				item.eventId === eventId ? { ...item, amount: newAmount } : item
			)
		);
	};

	// 🧹 Töm hela varukorgen (t.ex. vid beställning)
	const clearCart = () => {
		setTickets([]);
	};

	return { tickets, addTickets, removeTickets, updateAmount, clearCart };
};
