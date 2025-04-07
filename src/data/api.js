const API_URL = 'https://santosnr6.github.io/Data/events.json';
import axios from 'axios';
export function fetchEvents(setEvents) {
	axios
		.get(API_URL)
		.then((response) => setEvents(response))
		.catch((error) => console.log(error));
}
