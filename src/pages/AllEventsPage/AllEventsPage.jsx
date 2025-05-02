import './AllEventsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import { useFetch } from '../../API/useFetch';
import EventList from '../../components/EventList/EventList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEventListStore } from '../../store/useEventListStore.js';
import { useEffect } from 'react';

const AllEventsPage = () => {
	const { data, isLoading, isError } = useFetch();
	const { updateBySearch, setEventList, eventList } = useEventListStore();

	useEffect(() => {
		if (data !== null) {
			console.log(data);
			setEventList(data);
		}
	}, [data, setEventList]);

	const handleSearch = (input) => {
		console.log(input.target.value);
		updateBySearch(input.target.value);
	};

	//Verkar bli en vit stärm i början ifamm man gör detta? antalgigen för att det blir utan page classen
	// if (isLoading) return <p className="error-p">Loading events...</p>;
	// if (isError) return <p className="error-p">Someting went wrong</p>;

	return (
		<section className="page page-all-events">
			<h1 className="page__header">Events</h1>

			{data !== null ? (
				<>
					<SearchBar handleSearch={handleSearch} events={eventList} />
					<EventList events={eventList} />
				</>
			) : (
				<p className="error-p">Loading...</p>
			)}
			<NavBar />
		</section>
	);
};

export default AllEventsPage;
