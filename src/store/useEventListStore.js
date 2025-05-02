// store/eventListStore.js
import { create } from 'zustand';

export const useEventListStore = create((set) => ({
	originalEventList: [],
	eventList: [],
	setEventList: (newData) =>
		set({ originalEventList: newData, eventList: newData }),

	updateBySearch: (input) =>
		set((state) => {
			const search = input.toLowerCase();

			if (search.length === 0) {
				// Visa originaldatan om input är tom
				return { eventList: state.originalEventList };
			}

			const filtered = state.originalEventList.filter(
				(event) =>
					event.name.toLowerCase().includes(search) ||
					event.where.toLowerCase().includes(search) ||
					event.when.date.toLowerCase().includes(search)
			);

			return { eventList: filtered };
		}),
}));
