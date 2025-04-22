import { HashRouter, Routes, Route } from 'react-router-dom';
import SplashScreenPage from '../pages/SplashScreenPage/SplashScreenPage';
import AllEventsPage from '../pages/AllEventsPage/AllEventsPage';
import EventDetailPage from '../pages/EventDetailPage/EventDetailPage';
import OrderSummaryPage from '../pages/OrderSummaryPage/OrderSummaryPage';
import TicketsPage from '../pages/TicketsPage/TicketsPage';

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<SplashScreenPage />} />
				<Route path="/all-events" element={<AllEventsPage />} />
				<Route path="/event/:id" element={<EventDetailPage />} />
				<Route path="/order-summary" element={<OrderSummaryPage />} />
				<Route path="/tickets" element={<TicketsPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</HashRouter>
	);
};

export default Router;

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <SplashScreenPage />,
// 		errorElement: <ErrorPage />,
// 	},
// 	{
// 		path: '/all-events',
// 		element: <AllEventsPage />,
// 	},
// 	{
// 		path: '/event/:id',
// 		element: <EventDetailPage />,
// 	},
// 	{
// 		path: '/order-summary',
// 		element: <OrderSummaryPage />,
// 	},
// 	{
// 		path: '/tickets',
// 		element: <TicketsPage />,
// 	},
// ]);
