import './AllEventsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import { useFetch } from '../../hooks/useFetch';
import EventList from '../../components/EventList/EventList';
import SearchBar from '../../components/SearchBar/Searchbar';

const AllEventsPage = () => {
	const { data, isLoading, isError } = useFetch();

	//Verkar bli en vit stärm i början ifamm man gör detta? antalgigen för att det blir utan page classen
	// if (isLoading) return <p className="error-p">Loading events...</p>;
	// if (isError) return <p className="error-p">Someting went wrong</p>;

	return (
		<section className="page page-all-events">
			<h1 className="page__header">Events</h1>

			<SearchBar />
			{data !== null ? (
				<EventList events={data} />
			) : (
				<p className="error-p">Loading...</p>
			)}
			<NavBar />
		</section>
	);
};

export default AllEventsPage;
