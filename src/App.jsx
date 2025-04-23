import {
	createBrowserRouter,
	RouterProvider,
	HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import SplashScreenPage from './pages/SplashScreenPage/SplashScreenPage';
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import AllEventsPage from './pages/AllEventsPage/AllEventsPage';
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import EventSelectionPage from './pages/EventSelectionPage/EventSelectionPage';

function App() {
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
	//  {
	// 		path: '/my-events',
	// 		element: <EventSelectionPage />,
	// 	},
	// 	{
	// 		path: '/tickets',
	// 		element: <TicketsPage />,
	// 	},
	// ]);

	return (
		<div className="app">
			<HashRouter>
				<Routes>
					<Route path="/" element={<SplashScreenPage />} />
					<Route path="/all-events" element={<AllEventsPage />} />
					<Route path="/event/:id" element={<EventDetailPage />} />
					<Route
						path="/order-summary"
						element={<OrderSummaryPage />}
					/>
					<Route path="/my-events" element={<EventSelectionPage />} />
					<Route path="/tickets/:id" element={<TicketsPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</HashRouter>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

export default App;
