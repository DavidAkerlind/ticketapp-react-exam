import { useEffect, useState } from 'react';

export const useLocalStorageCart = () => {
	const [tickets, setTickets] = useState(() => {
		const stored = localStorage.getItem('cart');
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(tickets));
	}, [tickets]);

	//  Lägg till biljetter till varukorgen
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
				// Lägg till ny event med tuickets
				return [...prev, ticketsToAdd];
			}
		});
	};

	// Ta bort alla tickets från cart på ett event
	const removeTickets = (id) => {
		setTickets((prev) => prev.filter((item) => item.id !== id));
	};

	//  Uppdatera antalet biljetter i varukorgen
	const updateAmount = (id, newAmount) => {
		if (newAmount <= 0) {
			removeTickets(id);
			return;
		}

		setTickets((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, amount: newAmount } : item
			)
		);
	};

	// Töm hela varukorgen
	const clearCart = () => {
		setTickets([]);
	};

	return { tickets, addTickets, removeTickets, updateAmount, clearCart };
};
