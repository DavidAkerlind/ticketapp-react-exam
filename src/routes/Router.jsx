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
				<Route path="/" element={<SplashScreenPage />} />
				<Route path="/events" element={<AllEventsPage />} />
				<Route path="/event/:id" element={<EventDetailPage />} />
				<Route path="/order" element={<OrderSummaryPage />} />
				<Route path="/ticket/:id" element={<TicketsPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
