import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SplashScreenPage from './pages/SplashScreenPage/SplashScreenPage';
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import AllEventsPage from './pages/AllEventsPage/AllEventsPage';
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <SplashScreenPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/all-events',
			element: <AllEventsPage />,
		},
		{
			path: '/event/:id',
			element: <EventDetailPage />,
		},
		{
			path: '/order-summary',
			element: <OrderSummaryPage />,
		},
		{
			path: '/tickets',
			element: <TicketsPage />,
		},
	]);
	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
