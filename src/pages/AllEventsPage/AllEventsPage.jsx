import { Link } from 'react-router-dom';

const AllEventsPage = () => {
	return (
		<div>
			<h1>Alla Evenemang</h1>
			<Link to="/ticketapp-react-exam/order">Gå till order</Link>
		</div>
	);
};

export default AllEventsPage;
