import NavBar from '../../components/NavBar/NavBar';
import './EventSelectionPage.css';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import SelectEventList from '../../components/SelectEventList/SelectEventList';

function EventSelectionPage() {
	const { tickets } = useCartStore();

	return (
		<section className="page page-event-selection">
			<SelectEventList />
			<NavBar />
		</section>
	);
}

export default EventSelectionPage;
