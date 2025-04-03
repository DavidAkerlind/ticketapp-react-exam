import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreenPage from '../pages/SplashScreenPage/SplashScreenPage';
import AllEventsPage from '../pages/AllEventsPage/AllEventsPage';
import EventDetailPage from '../pages/EventDetailPage/EventDetailPage';
import OrderSummaryPage from '../pages/OrderSummaryPage/OrderSummaryPage';
import TicketsPage from '../pages/TicketsPage/TicketsPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/ticketapp-react-exam"
					element={<SplashScreenPage />}
				/>
				<Route
					path="/ticketapp-react-exam/events"
					element={<AllEventsPage />}
				/>
				<Route
					path="/ticketapp-react-exam/event/:id"
					element={<EventDetailPage />}
				/>
				<Route
					path="/ticketapp-react-exam/order"
					element={<OrderSummaryPage />}
				/>
				<Route
					path="/ticketapp-react-exam/ticket/:id"
					element={<TicketsPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
