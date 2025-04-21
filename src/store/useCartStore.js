import { create } from 'zustand';
import { generateTicketsForEvent } from '../utils/utils';

export const useCartStore = create((set) => ({
	// === Ursprungsdata ===
	cartEvents: JSON.parse(localStorage.getItem('cart')) || [],
	tickets: JSON.parse(localStorage.getItem('tickets')) || {},

	// === Hantera cartEvents ===
	addTickets: (ticketsToAdd) =>
		set((state) => {
			const existing = state.cartEvents.find(
				(item) => item.id === ticketsToAdd.id
			);
			let updated;
			if (existing) {
				updated = state.cartEvents.map((item) =>
					item.id === ticketsToAdd.id
						? { ...item, amount: item.amount + ticketsToAdd.amount }
						: item
				);
			} else {
				updated = [...state.cartEvents, ticketsToAdd];
			}
			localStorage.setItem('cart', JSON.stringify(updated));
			return { cartEvents: updated };
		}),

	updateAmount: (id, newAmount) =>
		set((state) => {
			let updated;
			if (newAmount <= 0) {
				updated = state.cartEvents.filter((item) => item.id !== id);
			} else {
				updated = state.cartEvents.map((item) =>
					item.id === id ? { ...item, amount: newAmount } : item
				);
			}
			localStorage.setItem('cart', JSON.stringify(updated));
			return { cartEvents: updated };
		}),

	removeTickets: (id) =>
		set((state) => {
			const updated = state.cartEvents.filter((item) => item.id !== id);
			localStorage.setItem('cart', JSON.stringify(updated));
			return { cartEvents: updated };
		}),

	clearCart: () =>
		set(() => {
			localStorage.removeItem('cart');
			return { cartEvents: [] };
		}),

	// === Generera och spara biljetter ===
	generateTicketsFromCart: () =>
		set((state) => {
			const newlyGenerated = state.cartEvents.flatMap((event) =>
				generateTicketsForEvent(event)
			);

			const existing = JSON.parse(localStorage.getItem('tickets')) || {};

			newlyGenerated.forEach((ticket) => {
				if (!existing[ticket.eventId]) {
					existing[ticket.eventId] = [];
				}
				existing[ticket.eventId].push(ticket);
			});

			localStorage.setItem('tickets', JSON.stringify(existing));

			return { tickets: existing };
		}),

	clearTickets: () =>
		set(() => {
			localStorage.removeItem('tickets');
			return { tickets: [] };
		}),

	// removeUsedTickets: (id) =>
	// 	set((state) => {
	// 		const updated = state.tickets.filter((item) => item.id !== id);
	// 		localStorage.setItem('tickets', JSON.stringify(updated));
	// 		return { tickets: updated };
	// 	}),
}));
