import { create } from 'zustand';
import { generateTicketsForEvent } from '../utils/utils';

export const useTicketStore = create((set) => ({
	// === Startdata från localStorage eller tomt objekt ===
	tickets: JSON.parse(localStorage.getItem('tickets')) || {},

	// === Generera biljetter från varukorgen ===
	generateTicketsFromCart: (cartEvents) =>
		set(() => {
			const newlyGenerated = cartEvents.flatMap((event) =>
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

	// === Töm alla sparade biljetter ===
	clearTickets: () =>
		set(() => {
			localStorage.removeItem('tickets');
			return { tickets: {} };
		}),

	// === Ta bort använda biljetter för ett event ===
	removeUsedTickets: (eventId) =>
		set((state) => {
			const updatedTickets = { ...state.tickets };
			delete updatedTickets[eventId];

			if (Object.keys(updatedTickets).length === 0) {
				localStorage.removeItem('tickets');
			} else {
				localStorage.setItem('tickets', JSON.stringify(updatedTickets));
			}

			return { tickets: updatedTickets };
		}),
}));
