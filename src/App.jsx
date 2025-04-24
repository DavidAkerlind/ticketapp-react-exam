import {
	createBrowserRouter,
	RouterProvider,
	HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SplashScreenPage = lazy(() =>
	import('./pages/SplashScreenPage/SplashScreenPage')
);
const OrderSummaryPage = lazy(() =>
	import('./pages/OrderSummaryPage/OrderSummaryPage')
);
const TicketsPage = lazy(() => import('./pages/TicketsPage/TicketsPage'));
const AllEventsPage = lazy(() => import('./pages/AllEventsPage/AllEventsPage'));
const EventDetailPage = lazy(() =>
	import('./pages/EventDetailPage/EventDetailPage')
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const EventSelectionPage = lazy(() =>
	import('./pages/EventSelectionPage/EventSelectionPage')
);

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
					<Route
						path="/"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<SplashScreenPage />
							</Suspense>
						}
					/>
					<Route
						path="/order-summary"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<OrderSummaryPage />
							</Suspense>
						}
					/>
					<Route
						path="/tickets/:id"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<TicketsPage />
							</Suspense>
						}
					/>
					<Route
						path="/all-events"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<AllEventsPage />
							</Suspense>
						}
					/>
					<Route
						path="/event/:id"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<EventDetailPage />
							</Suspense>
						}
					/>
					<Route
						path="/my-events"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<EventSelectionPage />
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<ErrorPage />
							</Suspense>
						}
					/>
				</Routes>
			</HashRouter>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

export default App;
