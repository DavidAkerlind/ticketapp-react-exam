import { fetchEvents } from './data/api';
import Router from './routes/Router';

fetchEvents().then((events) => console.log(events));

function App() {
	return (
		<div className="app">
			<Router />
		</div>
	);
}

export default App;
