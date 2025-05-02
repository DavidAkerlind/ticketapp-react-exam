import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ events, handleSearch }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
			}}
			className="searchbar">
			<button>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="searchbar__icon"
				/>
			</button>
			<input
				aria-label="Search Events"
				id="search-input"
				type="search"
				className="searchbar__input"
				onChange={handleSearch}
			/>
		</form>
	);
}

export default SearchBar;
