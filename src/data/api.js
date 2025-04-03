const API_URL = 'https://santosnr6.github.io/Data/events.json';

export const fetchEvents = async () => {
	try {
		const response = await fetch(API_URL);
		if (!response.ok)
			throw new Error('Något gick fel vid hämtning av events.');
		const data = await response.json();
		return data.events;
	} catch (error) {
		console.error(error);
		return [];
	}
};
