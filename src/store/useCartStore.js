import { create } from 'zustand';

// Det går att ta bort localstorage inegrationen om man vill bara att ta bort allt som handlar om det och köra.
// Men jag har valt att ha kvar det för att man ska slippa beställnigsprocessen när jag byggt sidan

// Det är samma med useTicketStore och jag har delat upp dem för skalbarheten och förståelsens skull.

export const useCartStore = create((set) => ({
	// === Startdata från localStorage eller tom array ===
	cartEvents: JSON.parse(localStorage.getItem('cart')) || [],

	// === Lägg till biljetter i varukorgen ===
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

	// === Uppdatera antal biljetter för ett event ===
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

	// === Ta bort ett event från varukorgen ===
	removeCartItem: (id) =>
		set((state) => {
			const updated = state.cartEvents.filter((item) => item.id !== id);
			localStorage.setItem('cart', JSON.stringify(updated));
			return { cartEvents: updated };
		}),

	// === Töm hela varukorgen ===
	clearCart: () =>
		set(() => {
			localStorage.removeItem('cart');
			return { cartEvents: [] };
		}),
}));
