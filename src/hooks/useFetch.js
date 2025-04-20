import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [isError, setIsError] = useState(null);
	const url = 'https://santosnr6.github.io/Data/events.json';

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((response) => setData([...response.data.events]))
			.catch((error) => {
				console.log('Fetch error: ', error);
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, isError };
};
