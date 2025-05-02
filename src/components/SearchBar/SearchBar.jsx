import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ events, handleSearch }) {
	console.log(events);

	return (
		<form className="searchbar">
			<button>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="searchbar__icon"
				/>
			</button>
			<input
				aria-label="Search Events"
				id="search-input"
				type="text"
				className="searchbar__input"
				onChange={handleSearch}
			/>
		</form>
	);
}

export default SearchBar;
